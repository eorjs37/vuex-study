const moduleA = {
  namespaced: true,
  state: () => ({
    obj1: {},
  }),
  getters: {
    getObj1(state) {
      return state.obj1;
    },
  },
  actions: {
    someAction({ commit }, payload) {
      commit("setObj1", payload);
    },
  },
  mutations: {
    setObj1(state, payload) {
      state.obj1 = payload;
    },
  },
};
export { moduleA };
