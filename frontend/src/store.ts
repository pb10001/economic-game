import Vue from 'vue';
import Vuex from 'vuex';
import agriculture from './agriculture';
import stones from './stones';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    agriculture,
    stones,
  },
});
