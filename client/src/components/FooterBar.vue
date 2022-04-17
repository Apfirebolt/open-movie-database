<template>
  <footer v-show="isFooterBarVisible" class="footer">
    <div class="container-fluid">
      <div class="footer-copyright">
        <b>&copy; {{ year }}, Open Movie Database.me</b>
        <span class="tag">v1.5.0</span>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from "dayjs";
import { mapState } from "vuex";

export default {
  name: "FooterBar",
  computed: {
    year() {
      return dayjs().year();
    },
    ...mapState(["isFooterBarVisible"]),
  },
};
</script>
