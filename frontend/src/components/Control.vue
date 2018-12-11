<template>
    <div>
        <div class="buttons has-addons">
            <span class="button is-primary is-outlined">農地拡大</span>
            <span class="button is-success is-outlined">セーブ</span>
            <span @click="next" class="button is-primary is-outlined">次の月へ</span>
        </div>
        <div class="columns is-multiline is-variable is-1">
            <div class="column is-4" v-for="item in veges" :key="item.name" v-if="item.isSeedable(currentMonth)">
                <div class="card">
                    <div class="media">
                        <img :src="item.url" width="100">
                        <p class="is-size-4">{{item.name}}</p>
                    </div>
                    <div class="card-content">
                        <p>種の価格: {{item.initPrice}}P</p>
                        <p>栽培期間: {{item.span}}ヶ月</p>
                        <p>販売価格: {{item.value}}P</p>
                        <p>リスク: {{item.risk}}</p>
                        <button @click="seed(item)" class="button is-primary">植える</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vegetable from '../vegetable';
@Component({
    computed: {
        currentMonth() {
            return this.$store.state.agriCulture.month;
        },
        veges() {
            return this.$store.state.agriCulture.vegetables;
        }
    },
    mounted() {
    },
    methods: {
        next() {
            this.$store.commit('agriCulture/nextMonth');
        },
        seed(item: Vegetable) {
            this.$store.commit("agriCulture/seed", item.copy());
        }
    }
})
export default class Control extends Vue{
}
</script>