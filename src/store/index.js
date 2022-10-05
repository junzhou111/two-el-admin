import Vue from "vue";
import Vuex from "vuex";
import { setlotionToken, getlotionToken } from "../utils/auth";
import Menu from "./modules/menu";
import getters from "./modules/getters"
import newdata from "../api/text";

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
      state.token = obj.data.token;
      setlotionToken(obj.data.token);
    },
  },
  actions: {
    async handleLogin({ commit }, str) {
      try {
        console.log(111);
        const hanLog = await newdata.getNewlist(str);
        console.log(hanLog);
        commit("handleLogin", hanLog);
        return hanLog;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters,
  modules: {
    Menu,
  },
});
