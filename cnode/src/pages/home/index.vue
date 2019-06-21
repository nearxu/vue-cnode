<template>
  <div>
    <v-header :show="show" :title="title"></v-header>
    <div class="tab">
      <div class="tab-switch">
        <tab-nav :tabs="lists"></tab-nav>
      </div>
      <div class="tab-content">
        <!-- <slot></slot> -->
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10"
        >
          >
          <li v-for="item in data" :key="item.id">
            <list-item :item="item"></list-item>
          </li>
        </ul>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import TabNav from '@/components/tab/tab-nav'
import http from '@/server/http'
import ListItem from '@/components/list-item'

export default {
  name: 'home',
  data () {
    return {
      show: false,
      title: 'all',
      data: [],
      lists: [
        { id: 0, title: 'all', name: 'home' },
        { id: 1, title: 'share', name: 'home' },
        { id: 2, title: 'job', name: 'home' },
        { id: 3, title: 'good', name: 'home' },
        { id: 4, title: 'ask', name: 'home' }
      ],
      // scroll
      busy: false,
      pages: 1
    }
  },
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'tab-nav': TabNav,
    'list-item': ListItem
  },
  created () {
    console.log('home', this.$route.query)
    this.getData()
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated ')
  },
  methods: {
    getData (reset = true) {
      const types = ['all', 'share', 'job', 'good', 'ask']
      const ids = this.$route.query.id
      const tab = types[ids]
      const params = {
        page: this.pages,
        limit: 10,
        tab: tab || 'all'
      }
      http.get('/topics', params).
        then(res => {
          if (reset) {
            this.data = res.data.data
            if (res.data.data.length === 0) {
              this.busy = true
              return
            }
          } else {
            this.data = this.data.concat(res.data.data)
          }
          this.busy = false
        })
    },
    loadMore () {
      this.busy = true
      this.pages += 1
      setTimeout(() => {
        this.getData(false)
      }, 1000)
    }
  },
  watch: {
    $route (to, from) {
      console.log(to, from)
      if (to.name !== 'Home') {
        return
      }
      if (to.query.id !== from.query.id) {
        // change router ,reset pages
        this.pages = 1
      }
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
.tab {
  margin-top: 100px;
  .tab-content {
    overflow-y: hidden;
  }
}
</style>

