/*
 * @Author: nearxu
 * @Date: 2019-06-20 11:18:32
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-20 12:12:54
 */

<template>
  <div class="vfooter">
    <ul>
      <li class="item">
        <router-link :to="{ path: '/post' }">
          <i class="cnode-iconfont">&#xe61f;</i>
          <span>发表</span>
        </router-link>
      </li>
      <li class="item">
        <router-link :to="{ path: '/message' }">
          <i class="cnode-iconfont">&#xe639;</i>
          <span>消息</span>
        </router-link>
      </li>
      <li class="item">
        <router-link :to="{ path: '/me' }">
          <i class="cnode-iconfont">&#xe66e;</i>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footers'
}
</script>
<style lang="scss" scoped>
.vfooter {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  // box-shadow: 0 0 10px 0 $main-tone;
  ul {
    display: flex;
    justify-content: center;
    background-color: #03a9f4;
    color: #333;
    li {
      display: flex;
      height: 100px;
      flex: 1;
      justify-content: center;
      a {
        padding: 10px;
        i,
        span {
          display: block;
          line-height: 40px;
          text-align: center;
        }
      }
      .cnode-active {
        color: green;
      }
    }
  }
}
</style>


