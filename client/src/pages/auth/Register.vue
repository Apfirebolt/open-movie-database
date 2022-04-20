<template>
  <div>
    <p>Register Page</p>
    <register-form />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: "Register",
  components: {
    RegisterForm,
  }
};
</script>
