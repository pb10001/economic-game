import Vegetable from './vegetable';
import FieldModel from './field';
import AnnualReportModel from './annual-report';
import Debt from './debt';
interface State {
    fields: FieldModel[];
}
const PERIOD = 40;
const UNIT_DEBT: number  = 50000;
const LAND_PRICE: number = 50000;
const LAND_VALUE: number = 40000;
const CULTIVATION_COST: number = 500;

const agriculture = {
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
      end: false,
      minus: false,
      vegetables: {
        cabbage: new Vegetable('キャベツ', [3, 4, 5, 6], 4, 0.4, 200, 5000, '/img/cabbage.png'),
        carrot: new Vegetable('ニンジン', [4, 5, 6, 7], 3, 0.1, 100, 3000, '/img/carrot.png'),
        onion: new Vegetable('タマネギ', [11, 12], 6, 0.2, 300, 6000, '/img/onion.png'),
        daikon: new Vegetable('ダイコン', [3, 4, 8, 9], 3, 0.2, 200, 3500),
        spinach: new Vegetable('ホウレンソウ', [3, 4, 9, 10], 1, 0.5, 100, 2000, '/img/spinach.png'),
      },
      fields: [
        new FieldModel(1),
        new FieldModel(2),
        new FieldModel(3),
        new FieldModel(4),
      ],
      debts: [],
    },
    mutations: {
      gain(state: any, price: number) {
        if (state.end) {return; }
        state.money += price;
        if (state.money >= 0) {
          /* プラスに転じた場合 */
          state.minus = false;
        }
      },
      consume(state: any, price: number) {
        if (state.end) {return; }
        if (state.minus) { return; }
        state.money -= price;
        if (state.money < 0) {
          /* マイナス */
          state.log += '所持金がマイナスになりました\n';
          state.minus = true;
        }
      },
      report(state: any) {
        const report: AnnualReportModel = state.report;
        report.cash = state.money;
        report.land = state.fields.length * LAND_PRICE;
        report.debt = state.debts.length * UNIT_DEBT;


        state.reportLog += '【年次レポート　' + state.year + '年目】\n';
        if (report.netAsset() < 0) {
          state.reportLog += '***債務超過***\n';
        }
        state.reportLog += report.toString() + '\n';
      },
      nextMonth(state: any) {
        if (state.end) {return; }
        if (state.minus) { return; }
        state.log = '';
        const debts: Debt[] = state.debts;
        debts.forEach((d) => {
          d.increase();
        });
        if (state.month < 12) {
          state.month++;
          state.log += '---' + state.year + '年目' + state.month + '月' + '---\n';
        } else if (state.year >= PERIOD) {
          agriculture.mutations.report(state); // 年次報告を作成
          /* ゲームを終了して最終結果を作成 */
          state.log += '終了\n';
          state.end = true;
          return;
        } else {
          /* 費用の見越し */
          const interest = state.debts.reduce((acc: number, next: Debt) => {
            return acc + next.total - next.principal;
          }, 0);
          state.report.interestExpense += interest; // 支払利息の見越し
          state.report.accuredInterest = interest; // 未払利息

          agriculture.mutations.report(state); // 年次報告を作成
          state.year++;
          state.month = 1;
          state.report = new AnnualReportModel(state.year);

          /* 期首再振替 */
          state.report.interestExpense -= interest; // 前期末の支払利息を相殺

          state.log += '---' + state.year + '年目' + state.month + '月' + '---\n';
        }
        const fields: FieldModel[]  = state.fields;
        fields.forEach((f) => {
          if (!f.vegetable.isEmpty()) {
            state.log += f.vegetable.name + 'を栽培した!\n';
            state.report.cultivationCost += CULTIVATION_COST; // 栽培費用
            agriculture.mutations.consume(state, CULTIVATION_COST);
          }
          f.vegetable.getAge();
        });
      },
      seed(state: any, vegetable: Vegetable) {
        if (state.end) {return; }
        if (state.minus) { return; }
        for (let i = 0; i < state.fields.length; i++) {
          const f = state.fields[i];
          if (f.vegetable.isEmpty()) {
            f.vegetable = vegetable;
            state.report.purchaseCost += f.vegetable.initPrice; // 費用
            agriculture.mutations.consume(state, f.vegetable.initPrice);
            state.log += f.vegetable.name + 'を植えた!\n';
            return;
          }
        }
      },
      seedAll(state: any, vegetable: Vegetable) {
        if (state.end) {return; }
        if (state.minus) { return; }
        const fields: FieldModel[] = state.fields;
        fields.filter((f: FieldModel) => f.vegetable.isEmpty())
          .forEach((f: FieldModel) => {
            f.vegetable = vegetable.copy();
            state.report.purchaseCost += f.vegetable.initPrice;
            agriculture.mutations.consume(state, f.vegetable.initPrice);
            state.log += f.vegetable.name + 'を植えた!\n';
          });
      },
      harvest(state: any, field: FieldModel) {
        if (state.end) {return; }
        const r = Math.random();
        if (r < field.vegetable.risk) {
          state.log += field.vegetable.name + 'の収穫に失敗した!\n';
        } else {
          state.log += field.vegetable.name + 'を収穫した!\n';
          state.report.revenue += field.vegetable.value; // 売り上げ
          agriculture.mutations.gain(state, field.vegetable.value);
        }
        field.vegetable = Vegetable.empty();
      },
      harvestAll(state: any) {
        if (state.end) {return; }
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
              agriculture.mutations.gain(state, v.value);
            }
            field.vegetable = Vegetable.empty();
          });
      },
      addField(state: any) {
        if (state.end) {return; }
        if (state.minus) { return; }
        const id = state.fields.length + 1;
        state.fields.push(new FieldModel(id));
        state.log += '農地を拡大した!\n';
        agriculture.mutations.consume(state, LAND_PRICE);
      },
      sellField(state: any) {
        if (state.end) {return; }
        const fields: FieldModel[] = state.fields;
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
        state.log += '農地を売却した!\n';
        agriculture.mutations.gain(state, LAND_VALUE);
        state.report.landLoss += LAND_PRICE - LAND_VALUE;
      },
      borrowMoney(state: any) {
        if (state.end) {return; }
        state.debts.push(new Debt(UNIT_DEBT, 0.0153)); // 年利約20%
        agriculture.mutations.gain(state, UNIT_DEBT);
      },
      payback(state: any, item: Debt) {
        if (state.end) {return; }
        if (state.minus) {return; }
        state.debts = state.debts.filter((d: Debt) => d !== item);
        state.report.interestExpense += item.total - item.principal; // 支払利息
        agriculture.mutations.consume(state, item.total);
      },
    },
    getters: {
      fields(state: any) {return state.fields; },
    },
  };

export default agriculture;
