<template>
  <div>
    <p>Login Page</p>
    <password-update-form />
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
