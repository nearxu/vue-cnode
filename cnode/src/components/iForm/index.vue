<template>
  <div>
    <v-form :model="model" :rules="rules" ref="formInfo">
      <v-form-item label="username" prop="username">
        <v-input v-model="model.username"></v-input>
      </v-form-item>
      <v-form-item label="password" prop="password">
        <v-input v-model="model.password"></v-input>
      </v-form-item>
      <button @click="submit('formInfo')">submit</button>
    </v-form>
  </div>
</template>

<script>
import VForm from '@/components/iForm/VForm'
import VFormItem from '@/components/iForm/VFormItem'
import VInput from '@/components/iForm/VInput'
export default {
  name: 'Form',
  components: {
    'v-form': VForm,
    'v-form-item': VFormItem,
    'v-input': VInput
  },
  data () {
    return {
      model: {
        username: ''
      },
      rules: {
        username: [
          { required: true, message: 'please input username' },
          { type: 'string', message: 'username格式不争取' }
        ],
        password: [
          {
            required: true, message: 'password must input'
          },
          { type: 'string', message: 'password is wrong' }

        ]
      }
    }
  },
  methods: {
    submit (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          console.log(this.$refs[form].model.password)
        }
      })
    }
  }
}
</script>
