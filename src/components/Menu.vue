<template>
  <div class="menu">
    <!-- {{ sidebardata }} -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      unique-opened
      :collapse="isCollapse"
    >
      <MenuItem :item="item" v-for="(item, index) in sidebardata"></MenuItem>
    </el-menu>
  </div>
</template>
<script>
import MenuItem from "../components/MenuItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  props: {
    sidebardata: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  components: {
    MenuItem,
  },
  methods: {},
  watch: {},
  computed: {
    ...mapGetters(["isCollapse"]),
  },
};
</script>
<style lang='scss'>
.menu {
  font-weight: 900;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
