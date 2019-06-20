
 <template>
  <div class="head">
    <div :class="['vheader', { showAnimate: show }]">
      <div class="left" @click="handleBackButton">
        <i v-show="showBackButton" class="cnode-iconfont">back</i>
      </div>
      <div class="center">
        <span class="text" v-text="title"></span>
      </div>
      <div class="right" @click="goPost">
        <i v-show="showPostButton" class="cnode-iconfont">post</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  props: {
    showMenuButton: {
      type: Boolean,
      default: true
    },
    showBackButton: {
      type: Boolean,
      default: false
    },
    showPostButton: {
      type: Boolean,
      default: true
    },
    handleMenuButton: {
      type: Function,
      default: () => {
        return
      }
    },
    handlePostButton: {
      type: Function,
      default: () => {
        return
      }
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '全部'
    }
  },
  methods: {
    showMenu () {
      this.handleMenuButton(!this.show)
    },
    handleBackButton () {
      this.$router.back()
    },
    goPost () {
      this.$router.push({ path: '/post' })
    }
  }
}
</script>

 <style lang="scss" scoped>
.vheader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #03a9f4;
  // box-shadow: 0 0 10px 0 $main-tone;
  line-height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  .left {
    flex: 1;
  }
  .center {
    flex: 3;
  }
  .right {
    flex: 1;
  }
  i {
    color: #fff;
  }
  span {
    color: #fff;
  }
}
.showAnimate {
  transform: translateX(300px);
}
</style>


