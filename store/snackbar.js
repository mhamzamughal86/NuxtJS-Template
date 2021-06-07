export const state = () => ({
  snackbar: null
})
export const getters = {
  GET_SNACKBAR(state) {
      return state.snackbar
  },
}
export const mutations = {
  SET_SNACKBAR(state, snackbar) {
      state.snackbar = snackbar;
  },
  HIDE_SNACKBAR(state) {
      state.snackbar = null
  }
}

export const actions = {
  setSnackbar({ commit }, snackbar) {
      snackbar.show = true
      snackbar.key = Math.random();
      snackbar.color = snackbar.color;
      snackbar.icon = snackbar.icon;
      commit('SET_SNACKBAR', snackbar);
  },
  hideSnackbar({ commit }) {
      commit('HIDE_SNACKBAR')
  }
}
