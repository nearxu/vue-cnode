<template>
  <div class="tab-nav">
    <ul>
      <li
        v-for="item in tabs"
        :key="item.id"
        :class="{ active: item.id === activeIndex }"
        @click="toggle(item)"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab-nav',
  props: ['tabs'],
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    console.log('tabnav', this.$route.query)
    if (this.$route.query && this.$route.query.id) {
      this.activeIndex = parseInt(this.$route.query.id)
    } else {
      this.activeIndex = 0
    }
  },
  methods: {
    toggle (item) {
      this.activeIndex = item.id
      this.$router.push({ path: item.name, query: { id: item.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-nav {
  border-bottom: 1px solid #e5e5e5;
  ul {
    display: flex;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      font-size: 24px;
      line-height: 100px;
      color: #333;
      &.active {
        span {
          color: red;
        }
      }
      a {
        display: inline-block;
      }
    }
  }
}
</style>

