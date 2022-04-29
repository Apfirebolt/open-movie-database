<template>
  <div>
    <p>Login Page</p>
    <login-form />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: "Login",
  components: {
    LoginForm,
  }
};
</script>
