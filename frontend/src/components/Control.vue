<template>
    <div>
        <b-tag class="subtitle is-large is-white is-rounded has-text-primary">{{currentMoney}}P</b-tag>
        <div class="buttons has-addons">
            <span @click="harvestAll" class="button is-success is-small">すべて収穫</span>
            <span @click="addField" class="button is-success is-small">農地拡大</span>
            <span @click="sellField" class="button is-danger is-small">農地売却</span>
            <span @click="borrow" class="button is-danger is-small">借金</span>
            <span @click="next" class="button is-success is-small">次の月へ</span>
        </div>
        <transition-group name="vl" class="flex">
            <div class="" v-for="item in veges" :key="item.name" v-if="item.isSeedable(currentMonth)">
                <div class="box">
                    <div class="content">
                        <div class="media">
                            <div class="media-left">
                                <img :src="item.url" width="48">
                            </div>
                            <div class="media-content">
                                <p class="title is-6">{{item.name}}</p>
                            </div>
                        </div>
                        <div class="buttons has-addons">
                            <a @click="seed(item)" class="button is-primary is-small">植える</a>
                            <a @click="seedAll(item)" class="button is-info is-small">全畑に植える</a>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vegetable from '../vegetable';
@Component({
    computed: {
        currentMoney() {
            return this.$store.state.agriculture.money;
        },
        currentMonth() {
            return this.$store.state.agriculture.month;
        },
        veges() {
            return this.$store.state.agriculture.vegetables;
        },
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
        seedAll(item: Vegetable) {
            this.$store.commit('agriculture/seedAll', item);
        },
    },
})
export default class Control extends Vue {
}
</script>