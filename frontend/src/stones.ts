import StackModel from './stack';
const stones = {
    namespaced: true,
    state: {
        turnNum: 0,
        selectedIndex: -1,
        actionExists: false,
        stacks: [
            new StackModel(1, Math.floor(Math.random() * 8) + 1),
            new StackModel(2, Math.floor(Math.random() * 8) + 1),
            new StackModel(3, Math.floor(Math.random() * 8) + 1),
            new StackModel(4, Math.floor(Math.random() * 8) + 1),
        ] as StackModel[],
    },
    mutations: {
        select(state: any, id: number): void {
            state.selectedIndex = id;
        },
        removeOne(state: any): void {
            state.actionExists = true;
            state.stacks.filter((x: StackModel) => x.id === state.selectedIndex)
            .map((s: StackModel) => s.remove(1));
        },
        next(state: any): void {
            if (state.actionExists) {
                state.selectedIndex = -1;
                state.turnNum++;
                state.actionExists = false;
            }
        },
    },
    getters: {
        turnNum(state: any) { return state.turnNum; },
        stacks(state: any) { return state.stacks; },
    },
};
export default stones;