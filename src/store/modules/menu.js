export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  mutations: {
    setCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {},
};
