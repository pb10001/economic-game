import Vue from 'vue';
import Vuex from 'vuex';
import Vegetable from './vegetable';

Vue.use(Vuex);

const agriCulture = {
  // モジュールごとにmutationsなどを分割できる(同じ名前でも)
  namespaced: true,
  state: {
    title : 'agriculture',
    description : 'agriculture',
    money: 1000,
    year: 1,
    month : 4,
    vegetables: [
      new Vegetable('キャベツ', [3, 4, 5, 6], 4, 0.2, 200, 300, '/img/cabbage.png'),
      new Vegetable('ニンジン', [4, 5, 6], 4, 0.1, 100, 120, '/img/carrot.png'),
      new Vegetable('タマネギ', [11, 12], 6, 0.1, 300, 450, ''),
    ],
  },
  mutations: {
    nextMonth(state: any) {
      if (state.month < 12) {
        state.month++;
      } else {
        state.year++;
        state.month = 1;
      }
    },
  },
};

export default new Vuex.Store({
  modules: {
    agriCulture,
  },
});
