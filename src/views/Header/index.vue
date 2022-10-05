<template>
  <div class="header">
    <div class="header-left">Vue、Element UI权限管理系统开发实战</div>
    <div class="header-right">
      <div class="img-box">
        <img class="userimg" src="../../../public/user.png" alt="" />
      </div>
      <div class="user">
        <div class="username">欢迎您，</div>
        <div class="userdata">时间</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods: {},
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  .header-left {
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    margin: 0 20px;
  }
  .header-right {
    height: 60px;
    line-height: 60px;
    margin: 0 20px;
    .img-box {
      float: left;
      margin: 5px;
      width: 50px;
      height: 50px;
      background-color: #464646;
      border-radius: 50%;
      overflow: hidden;
      .userimg {
        width: 50px;
        height: 50px;
      }
    }
    .user {
      float: right;
      margin: 10px 0;
      .username {
        height: 20px;
        line-height: 20px;
        font-weight: 600;
      }
      .userdata {
        height: 20px;
        line-height: 20px;
      }
    }
  }
}
</style>
