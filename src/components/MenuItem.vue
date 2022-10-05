<template>
  <fragment>
    <!-- 多 -->
    <el-submenu
      :index="item.path"
      v-if="item.children && item.children.length > 0"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span> {{ item.label }} </span>
      </template>
      <MenuItem :item="it" v-for="it in item.children"></MenuItem>
    </el-submenu>
    <!-- 单 -->
    <el-menu-item
      :index="item.path"
      v-if="item.children && item.children.length <= 0"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </fragment>
</template>
<script>
export default {
  name: "MenuItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  methods: {},
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
</style>
