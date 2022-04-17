<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="account-multiple"
          :number="512"
          label="Clients"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="cart-outline"
          :number="7770"
          prefix="$"
          label="Sales"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="chart-timeline-variant"
          :number="256"
          suffix="%"
          label="Performance"
        />
      </tiles>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardWidget from '@/components/CardWidget'

export default {
  name: 'Home',
  components: {
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar
  },
  computed: {
    titleStack () {
      return ['Admin', 'Dashboard']
    }
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
}
</script>
