<template>
  <div>
    <Menu :sidebardata="sidebardata" ></Menu>
  </div>
</template>
<script>
import newdata from "../../api/text";
// 引入menu组件
import Menu from "../../components/Menu";
export default {
  name: "App",
  data() {
    return {
      sidebardata: [],
    };
  },
 
  created() {
    newdata
      .getsidebar()
      .then((res) => {
        console.log("getsidebar", res);
        console.log(res.data.data.menuList);
        // 侧边栏数据
        this.sidebardata = res.data.data.menuList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Menu,
  },
  methods: {},
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
</style>
