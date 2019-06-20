<template>
  <div>
    <v-header :title="title" :showBackButton="true"></v-header>
    <div class="form-content">
      <v-form :model="model" :rules="rules" ref="tokenRef">
        <v-form-item label="token" prop="token">
          <v-input v-model="model.token"></v-input>
          <button @click="loginIn('tokenRef')">login in</button>
        </v-form-item>
      </v-form>
    </div>
  </div>
</template>

<script>
import VForm from '@/components/iForm/VForm'
import VFormItem from '@/components/iForm/VFormItem'
import VInput from '@/components/iForm/VInput'
import VHeader from '@/components/header'
import session from '@/server/session'
import http from '@/server/http'


export default {
  name: 'login',
  components: {
    'v-form': VForm,
    'v-form-item': VFormItem,
    'v-input': VInput,
    'v-header': VHeader
  },
  data () {
    return {
      title: 'login',
      model: {
        token: ''
      },
      rules: {
        token: [
          { required: true, message: 'token must' }
        ]
      }
    }
  },
  methods: {
    loginIn (form) {
      this.$refs[form].validate(valid => {
        debugger
        if (valid) {
          console.log(this.$refs[form].model.token)
          const token = this.$refs[form].model.token
          this.postToken(token)
        }
      })
    },
    postToken (token) {
      http.post('/accesstoken', { accesstoken: token }).
        then(res => {
          if (res.data) {
            session.set('user', res.data)
            setTimeout(() => {
              this.$router.go(-2)
              console.log(this.$router, 'router')
            }, 2000)
          } else {
            console.log(res.error_msg)
          }
          this.$refs['tokenRef'].model.token = ''
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.form-content {
  margin-top: 100px;
}
</style>

