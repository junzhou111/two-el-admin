<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside  width="auto">
          <Aside ></Aside>
        </el-aside>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "../Header/index.vue";
import Aside from "../Aside/index.vue";
import Main from "../Main/index.vue";
export default {
  name: "App",
  data() {
    return {
     
    };
  },
  components: {
    Header,
    Aside,
    Main,
  },
  methods: {
    
  },
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
.el-header {
  background-color: #167bd8;
  color: #fff;
  padding: 0;
}

.el-aside {
  background-color: #fff;
  color: rgb(0, 0, 0);
}

.el-main {
  background-color: #fff;
  color: #000;
  padding: 0;
  margin: 0;
}
.el-container {
  height: 100vh;
}
</style>
