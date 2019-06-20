import Cookies from 'js-cookie'
// 用于判断是否支持 sessionStorage, 在 safari 隐身模式下不支持 sessionStorage 和 localStorage

function isSessionStorageEnabled () {
  try {
    window.sessionStorage.setItem('__testItem__', '_test')
    window.sessionStorage.removeItem('__testItem__')
    return true
  } catch (e) {
    return false
  }
}

class Session {
  constructor () {
    this.isSessionStorageEnabled = isSessionStorageEnabled()
  }
  get (key) {
    let value
    if (this.isSessionStorageEnabled) {
      value = window.sessionStorage.getItem(key)
    } else {
      value = Cookies.get(key)
    }
    if (!value) {
      return null
    }
    try {
      value = JSON.parse(value)
    } catch (e) {
      console.log(e)
    }
    return value
  }

  set (key, value) {
    if (this.isSessionStorageEnabled) {
      if (typeof value === 'undefined') {
        return undefined
      }
      if (typeof value === 'number' || typeof value === 'string') {
        window.sessionStorage.setItem(key, value)
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(value))
      }
    } else {
      if (typeof value === 'undefined') {
        return undefined
      }
      if (typeof value === 'number' || typeof value === 'string') {
        Cookies.set(key, value)
      } else {
        Cookies.set(key, JSON.stringify(value))
      }
    }
  }

  clear (key) {
    if (this.isSessionStorageEnabled) {
      window.sessionStorage.removeItem(key)
    } else {
      Cookies.remove(key)
    }
  }

  remove (key) {
    this.clear(key)
  }
}

export default new Session()