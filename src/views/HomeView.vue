<template>
  <div>123456</div>
</template>
<script>
import newData from "../api/text";
export default {
  name: "App",
  data() {
    return {
      obj: {
        username: 'yangmr',
        password: '123456',
        code: 'gb3w',
      },
    };
  },
  created() {
    newData
      .getNewlist(this.obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {},
  methods: {},
  watch: {},
  computed: {},
};
</script>
<style lang='scss'>
</style>

