<template>
  <div>
    <i
      class="arrow-icon"
      :class="[isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
      @click="handleCollapse"
    ></i>
    <router-view />
  </div>
</template>
<script>
// vuex的辅助函数
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapMutations({
      setCollapse: "Menu/setCollapse",
    }),
    handleCollapse() {
      this.setCollapse();
      // this.$store.commit("setCollapse");
    },
  },
  watch: {},
  computed: {
    ...mapGetters(["isCollapse"]),
  },
};
</script>
<style lang='scss'>
.arrow-icon {
  font-size: 30px;
}
</style>
