<template>
  <div>
    <v-header :show="show" :title="title"></v-header>
    <div class="list">
      <ul>
        <li v-for="item in data" :key="item.id">
          <list-item :item="item"></list-item>
        </li>
      </ul>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import ListItem from '@/components/list-item'
import http from '@/server/http'

export default {
  name: 'Home',
  data () {
    return {
      show: false,
      title: 'all',
      data: []
    }
  },
  components: {
    'v-header': Header,
    'list-item': ListItem,
    'v-footer': Footer
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      const params = {
        page: 1,
        limit: 10,
        tab: 'all'
      }
      http.get('/topics', params).
        then(res => {
          console.log(res.data)
          this.data = res.data.data
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  margin-top: 100px;
}
</style>

