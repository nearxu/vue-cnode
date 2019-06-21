<template>
  <div class="tab">
    <div class="tab-switch">
      <tab-nav :tabs="lists"></tab-nav>
    </div>
    <div class="tab-content">
      <!-- <slot></slot> -->
      <!-- <router-view</router-view> -->
    </div>
  </div>
</template>
<script>
import TabNav from './tab-nav'

export default {
  name: 'tab',
  data () {
    return {
      lists: [
        { id: 0, title: 'content 0!' },
        { id: 1, title: 'content 1!' },
        { id: 2, title: 'content 2!' }
      ]
    }
  },
  methods: {
    // toggle (ids) {
    //   console.log(ids)
    //   this.$router.push({ name: 'tab-detail', params: { id: ids } })
    // }
  },
  mounted () {
    // this.$router.push({ name: 'tab-detail', params: { id: 1 } })
  },
  components: {
    'tab-nav': TabNav
  }

}
</script>
<style lang="scss" scoped>
.tab {
  margin-top: 100px;
}
</style>


