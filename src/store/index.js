import Vue from "vue";
import Vuex from "vuex";
import { setlotionToken, getlotionToken } from "../utils/auth";
import { handelLogin } from "../api/text";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getlotionToken() || "",
    user: "",
  },
  getters: {
    TOKEN(state) {
      return state.token;
    },
  },
  mutations: {
    handleLogin(state, obj) {
      console.log(obj);
      state.token = obj.token;
      setlotionToken(obj.token);
    },
  },
  actions: {
    async handleLogin({ commit }, str) {
      try {
        const hanLog = await handelLogin(str);
        commit("handleLogin", hanLog);
        return hanLog;
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
