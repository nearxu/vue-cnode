
/**
 * @description: isObject 是否为对象
 * @param {obj}
 * @return: boolean
 */

function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object,object]'
}

/**
 * @description: isArray 是否为数组
 * @param {obj}
 * @return: boolean
 */

function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object,array]'
}

/**
 * @description:对象是否为空
 * @param {obj}
 * @return: boolean
 */

function isEmpty (obj) {
  if (isArray(obj)) {
    return !obj.length
  }
  if (isObject(obj)) {
    for (let i in obj) {
      return false
    }
    return true
  }
}

/**
 * @description:
 * @param {obj,obj}
 * @return: boolean
 */

function isObjectValueEqual (a, b) {
  if (typeof a === 'number' && typeof b === 'number' ||
    typeof a === 'string' && typeof b === 'string') {
    return a === b
  }
  let aProps = Object.getOwnPropertyNames(a)
  let bProps = Object.getOwnPropertyNames(b)

  if (aProps.length !== bProps.length) {
    return false
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i]
    if (Object.prototype.toString(a[propName]) === '[object Object]' || Object.prototype.toString(b[propName]) === '[object Object]') {
      if (!isObjectValueEqual(a[propName], b[propName])) {
        return false
      }
    } else if (a[propName] !== b[propName]) {
      return false
    }
  }
  return true

}


/**
 * @description:  时间秒格式化成 h:mm:ss
 * @param {time,type}
 * @return: string
 */

function formatDate (seconds, type) {
  let min = Math.floor(seconds / 60)
  let second = seconds % 60
  let hour; let newMin; let time
  if (min >= 60) {
    hour = Math.floor(min / 60)
    newMin = min % 60
  }
  if (second < 10) {
    second = '0' + second
  }
  if (min < 10) {
    min = '0' + min
  }
  if (newMin < 10) {
    newMin = '0' + newMin
  }
  if (type === 0) {
    time = hour ? hour + ':' + newMin + '\'' + second + '\'\'' : min + '\'' + second + '\'\''
  } else {
    time = hour ? hour + ':' + newMin + ':' + second : min + ':' + second
  }
  return time
}


export { isArray, isObject, isEmpty, isObjectValueEqual, formatDate }

