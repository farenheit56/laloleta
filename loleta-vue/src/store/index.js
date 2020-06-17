import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    loading: {
      titulo: "HOLI",
      estado: false,
    },
    result: {
      display: false,
    }
  },
  mutations: {
    mostrarLoading(state, payload){
      state.loading.titulo = payload.titulo;
      state.loading.estado = true;
    },
    ocultarLoading(state){
      state.loading.estado = false;
    },
    showSumm(state){
      state.result.display = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
