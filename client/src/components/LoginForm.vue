<template>
  <card-component title="Login" icon="user">
    <form @submit.prevent="submit">
      <b-field
        horizontal
        label="Email"
        message="Required. Your email is required"
      >
        <b-input
          v-model="form.email"
          name="email"
          type="text"
          required
        />
      </b-field>
      <hr />
      <b-field horizontal label="Your Password" message="Required. Your password is required">
        <b-input
          v-model="form.password"
          name="password"
          type="password"
          required
          autocomplete="new-password"
        />
      </b-field>
      <hr />
      <b-field horizontal>
        <div class="control">
          <button
            type="submit"
            class="button is-primary"
            :class="{ 'is-loading': isLoading }"
          >
            Submit
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import CardComponent from '@/components/CardComponent'
export default {
  name: 'LoginForm',
  components: {
    CardComponent
  },
  data () {
    return {
      isLoading: false,
      form: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open(
          {
            message: 'Updated',
            queue: false
          },
          500
        )
      })
    }
  }
}
</script>
