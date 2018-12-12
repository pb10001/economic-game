import Vegetable from './vegetable';
export default class FieldModel {
    public id: number;
    private _vegetable: Vegetable = Vegetable.empty();
    constructor(id: number) {
        this.id = id;
    }
    public get vegetable(): Vegetable {
        return this._vegetable;
    }
    public set vegetable(value: Vegetable) {
        this._vegetable = value;
    }
}
