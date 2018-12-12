<template>
    <div class="columns is-multiline is-variable is-1">
        <div class="column is-4" v-for="item in veges" :key="item.name" v-if="item.isSeedable(currentMonth)">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <img :src="item.url" width="64">
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{item.name}}</p>
                        </div>
                    </div>
                    <p>種の価格: {{item.initPrice}}P</p>
                    <p>栽培期間: {{item.span}}ヶ月</p>
                    <p>販売価格: {{item.value}}P</p>
                    <p>リスク: {{item.risk * 100}}%</p>
                </div>
                <div class="card-footer">
                    <a @click="seed(item)" class="card-footer-item">植える</a>
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
        },
    },
    mounted() {
    },
    methods: {
        seed(item: Vegetable) {
            this.$store.commit('agriCulture/seed', item.copy());
        },
    },
})
export default class Catalogue extends Vue {
}
</script>