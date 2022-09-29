<template>
  <div class="login">
    <div class="login-box">
      <h2 class="login-tilte">系统登录</h2>
      <el-form ref="form" :model="form" label-width="0px">
        <el-form-item>
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <div class="box">
          <el-form-item class="saninp">
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
          </el-form-item>
          <img class="img" :src="url" alt="" />
        </div>
        <el-form-item class="btn-box">
          <el-button class="btn-left" type="primary">登录</el-button>
          <el-button class="btn-right">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import newdata from "../../api/text";
export default {
  name: "App",
  data() {
    return {
      form: {
        username: "",
        password: "",
        code: "",
      },
      url: "",
    };
  },
  created() {
    newdata.getimage().then((res) => {
      this.url = window.URL.createObjectURL(res.data);
    });
  },
  components: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.login-box {
  height: 300px;
  width: 350px;
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 10px;
  padding: 20px 35px;
  margin: 200px auto;
  .login-tilte {
    text-align: center;
    padding: 0 0 20px 0;
  }
}
.saninp {
  width: 226px;
}
.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.img {
  width: 100px;
  height: 40px;
}
.btn-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.btn-left {
  width: 165px;
}
.btn-right {
  width: 165px;
}
</style>
