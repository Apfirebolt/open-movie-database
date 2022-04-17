<template>
  <div>
    <p>Login Page</p>
    <password-update-form />
  </div>
</template>

<script>
import PasswordUpdateForm from '@/components/PasswordUpdateForm.vue'

export default {
  name: "Login",
  components: {
    PasswordUpdateForm,
  }
};
</script>
