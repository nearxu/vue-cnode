<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <list-item :item="item"></list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '@/server/http'
import ListItem from '@/components/list-item'
export default {
  name: 'list',
  data () {
    return {
      data: []
    }
  },
  methods: {
    getData () {
      const types = ['ask', 'share', 'job', 'good']
      const ids = this.$route.params.id
      const tab = types[ids]
      const params = {
        page: 1,
        limit: 10,
        tab: tab
      }
      http.get('/topics', params).
        then(res => {
          console.log(res.data)
          this.data = res.data.data
        })
    }
  },
  components: {
    'list-item': ListItem
  },
  mounted () {
    console.log(this.$route.params.id)
    this.getData()
  }
}
</script>
