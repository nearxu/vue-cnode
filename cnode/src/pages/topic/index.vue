<template>
  <div class="container">
    <v-header
      :title="title"
      :showMenuButton="false"
      :showBackButton="true"
      :showPostButton="false"
    ></v-header>
    <div class="detail" v-if="!showLoading">
      <div class="top1">
        <img :src="article && article.author.avatar_url" alt="" />
        <span v-text="article && article.author.loginname"></span>
        <span
          v-text="article && article.create_at.substring(0, 10)"
          class="time"
        ></span>
      </div>
      <div class="top2">
        <span class="title">
          {{ article && article.title }}
        </span>
        <div class="a_detail">
          <i class="cnode-iconfont"
            >&#xe7a0;
            {{ article && article.visit_count }}
          </i>
          <i class="cnode-iconfont"
            >&#xe638;
            {{ article && article.reply_count }}
          </i>
        </div>
      </div>
      <div
        class="content markdown-body"
        v-html="article && article.content"
      ></div>
      <div class="comment" v-if="article.replies && article.replies.length">
        <!-- <ul>
              <li v-for='comment in article.replies'>
                <v-comment-item :comment='comment'></v-comment-item>
              </li>
            </ul> -->
      </div>
      <!-- <div v-if="userInfo.userId" class="go_comment">
        <textarea
          v-model="go_comment"
          class="gc_content"
          placeholder="回复支持Markdown语法,请注意标记代码"
        ></textarea>
        <div class="button_group">
          <button type="submit" @click="handleComment">提交</button>
          <button type="cancle" @click="cancleComment">取消</button>
        </div>
      </div>
      <div v-else class="unlogin">
        您还未<router-link to="/login" tag="span">登录</router-link>
      </div> -->
    </div>
    <div v-else>加载中！！！</div>
    <!-- <v-loading v-else></v-loading> -->
  </div>
</template>

<script>
import Header from '@/components/header'
import http from '@/server/http'

export default {
  name: 'topic',
  data () {
    return {
      title: 'detail',
      showLoading: true,
      article: null
    }
  },
  components: {
    'v-header': Header
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      const id = this.$route.params.id
      if (!id) {
        return null
      }
      http.get('/topic/' + id).
        then(res => {
          console.log(res.data)
          this.article = res.data.data
          this.showLoading = !this.showLoading
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.detail {
  margin-top: 100px;
  color: black;
  .top1 {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 100px;
    min-height: 100px;
    border-bottom: 1px solid #ccc;
    background-color: green;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    span {
      margin-left: 20px;
      font-size: 14px;
      color: #83bd50;
      &.time {
        color: gray;
      }
    }
  }
  .top2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #ccc;
    min-height: 200px;
    padding: 30px 30px 0;
    .title {
      font-size: 24px;
      font-weight: 600;
      line-height: 1.3;
      flex: 3;
      display: flex;
      align-items: center;
    }
    .a_detail {
      color: #83bd50;
      height: 100px;
      line-height: 100px;
      flex: 1;
      i {
        margin-right: 50px;
      }
    }
  }
  .content {
    padding: 30px;
  }
  .go_comment {
    textarea {
      width: 90%;
      margin: 0 auto;
      height: 200px;
      display: block;
      // border:1px solid $main-tone;
      // box-shadow: 0 0 2px 0 $main-tone;
    }
    .button_group {
      display: flex;
      button {
        flex: 1;
        border: none;
        height: 80px;
        // background-color: $main-tone;
        color: #fff;
        margin: 30px;
      }
    }
  }
  .unlogin {
    text-align: center;
    border-top: 1px solid #ccc;
    padding: 100px 0;
    // letter-spacing: 4);
    span {
      // color:$main-tone;
    }
  }
}
</style>
