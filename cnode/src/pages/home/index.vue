<template>
  <div>
    <v-header :show="show" :title="title"></v-header>
    <div class="list">
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <list-item :item="item"></list-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import ListItem from '@/components/list-item'

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
    'list-item': ListItem
  }
}
</script>
