import Vue from 'vue';
import Vuex from 'vuex';
import Vegetable from './vegetable';
import FieldModel from './field';
import AnnualReportModel from './annual-report';

Vue.use(Vuex);
interface State {
  fields: FieldModel[];
}
const LAND_PRICE: number = 50000;
const LAND_VALUE: number = 40000;
const CULTIVATION_COST: number = 500;
const agriCulture = {
  // モジュールごとにmutationsなどを分割できる(同じ名前でも)
  namespaced: true,
  state: {
    title : 'agriculture',
    description : 'agriculture',
    log: '---1年目4月---\n',
    reportLog: '',
    report: new AnnualReportModel(1),
    money: 30000,
    year: 1,
    month : 4,
    gameOver: false,
    vegetables: {
      cabbage: new Vegetable('キャベツ', [3, 4, 5, 6], 4, 0.4, 200, 3000, '/img/cabbage.png'),
      carrot: new Vegetable('ニンジン', [4, 5, 6, 7], 3, 0.1, 100, 1200, '/img/carrot.png'),
      onion: new Vegetable('タマネギ', [11, 12], 6, 0.2, 300, 4500, '/img/onion.png'),
    },
    fields: [
      new FieldModel(1),
      new FieldModel(2),
      new FieldModel(3),
      new FieldModel(4),
    ],
  },
  mutations: {
    gain(state: any, price: number) {
      state.money += price;
      if (state.money >= 0) {
        /* プラスに転じた場合 */
        state.gameOver = false;
      }
    },
    consume(state: any, price: number) {
      if (state.gameOver) { return; }
      state.money -= price;
      if (state.money < 0) {
        /* マイナス */
        state.log += '所持金がマイナスになりました\n';
        state.gameOver = true;
      }
    },
    report(state: any) {
      const report = state.report;
      report.cash = state.money;
      report.land = state.fields.length * LAND_PRICE;
      state.reportLog += '【年次レポート　' + state.year + '年目】\n';
      state.reportLog += report.toString() + '\n';
    },
    nextMonth(state: any) {
      if (state.gameOver) { return; }
      state.log = '';
      const fields: FieldModel[]  = state.fields;
      fields.forEach((f) => {
        if (!f.vegetable.isEmpty()) {
          state.report.cultivationCost += CULTIVATION_COST; // 栽培費用
          agriCulture.mutations.consume(state, CULTIVATION_COST);
        }
        f.vegetable.getAge();
      });
      if (state.month < 12) {
        state.month++;
      } else {
        agriCulture.mutations.report(state); // 年次報告を作成
        state.year++;
        state.month = 1;
        state.report = new AnnualReportModel(state.year);
      }
      state.log += '---' + state.year + '年目' + state.month + '月' + '---\n';
    },
    seed(state: any, vegetable: Vegetable) {
      if (state.gameOver) { return; }
      for (let i = 0; i < state.fields.length; i++) {
        const f = state.fields[i];
        if (f.vegetable.isEmpty()) {
          f.vegetable = vegetable;
          state.report.purchaseCost += f.vegetable.initPrice; // 費用
          agriCulture.mutations.consume(state, f.vegetable.initPrice);
          state.log += f.vegetable.name + 'を植えた!\n';
          return;
        }
      }
    },
    harvest(state: any, field: FieldModel) {
      const r = Math.random();
      if (r < field.vegetable.risk) {
        state.log += field.vegetable.name + 'の収穫に失敗した!\n';
      } else {
        state.log += field.vegetable.name + 'を収穫した!\n';
        state.report.revenue += field.vegetable.value; // 売り上げ
        agriCulture.mutations.gain(state, field.vegetable.value);
      }
      field.vegetable = Vegetable.empty();
    },
    harvestAll(state: any) {
      const fields: FieldModel[] = state.fields;
      fields.filter((f) => f.vegetable.isHarvestable)
        .forEach((field) => {
          const v = field.vegetable;
          const r = Math.random();
          if (r < v.risk) {
            state.log += v.name + 'の収穫に失敗した!\n';
          } else {
            state.log += v.name + 'を収穫した!\n';
            state.report.revenue += v.value; // 売り上げ
            agriCulture.mutations.gain(state, v.value);
          }
          field.vegetable = Vegetable.empty();
        });
    },
    addField(state: any) {
      if (state.gameOver) { return; }
      const id = state.fields.length + 1;
      state.fields.push(new FieldModel(id));
      agriCulture.mutations.consume(state, LAND_PRICE);
    },
    sellField(state: any) {
      let fields: FieldModel[] = state.fields;
      if (state.fields.length === 0) {
        return;
      }
      let field: FieldModel = fields[0];
      for (const item of fields) {
        if (item.vegetable.isEmpty()) {
          field = item;
          break;
        }
      }
      state.fields = fields.filter((f: FieldModel) => f !== field);
      agriCulture.mutations.gain(state, LAND_VALUE);
      state.report.landLoss += LAND_PRICE - LAND_VALUE;
    },
  },
  getters: {
    fields(state: any) {return state.fields; },
  },
};

export default new Vuex.Store({
  modules: {
    agriCulture,
  },
});
