<template>
    <div>
        <div class="buttons has-addons">
            <span @click="harvestAll" class="button is-primary is-outlined">すべて収穫</span>
            <span class="button is-primary is-outlined">セーブ</span>
            <span @click="next" class="button is-primary is-outlined">次の月へ</span>
        </div>
        <div class="buttons has-addons">
            <span @click="addField" class="button is-danger is-outlined">農地拡大</span>
            <span @click="sellField" class="button is-danger is-outlined">農地売却</span>
            <span @click="borrow" class="button is-danger is-outlined">借金</span>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vegetable from '../vegetable';
@Component({
    computed: {
    },
    mounted() {
    },
    methods: {
        next() {
            this.$store.commit('agriculture/nextMonth');
        },
        seed(item: Vegetable) {
            this.$store.commit('agriculture/seed', item.copy());
        },
        harvestAll() {
            this.$store.commit('agriculture/harvestAll');
        },
        addField() {
            this.$dialog.confirm({
                message:'50000P消費します。続けますか？',
                onConfirm: () => this.$store.commit('agriculture/addField'),
            })
        },
        sellField() {
            this.$dialog.confirm({
                message:'40000Pで農地を1つ手放します。続けますか？',
                onConfirm: () => this.$store.commit('agriculture/sellField'),
            })
        },
        borrow() {
            this.$dialog.confirm({
                message:'50000Pを借ります。\n年利約20%(月利1.53%複利、10円未満は切り捨て)です。\n続けますか？',
                onConfirm: () => this.$store.commit('agriculture/borrowMoney'),
            })
        },
    },
})
export default class Control extends Vue {
}
</script>