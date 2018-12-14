<template>
    <div class="columns is-multiline is-variable is-1">
        <div class="column is-4" v-for="item in veges" :key="item.name" v-if="item.isSeedable(currentMonth)">
            <div class="box">
                <div class="content">
                    <div class="media">
                        <div class="media-left">
                            <img :src="item.url" width="64">
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{item.name}}</p>
                            <div class="buttons has-addons">
                                <a @click="seed(item)" class="button is-primary">植える</a>
                                <a @click="seedAll(item)" class="button is-info">全畑に植える</a>
                            </div>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <th>項目</th>
                            <th>値</th>
                        </tr>
                        <tr>
                            <td>種の価格</td>
                            <td>{{item.initPrice}}P</td>
                        </tr>
                        <tr>
                            <td>栽培期間</td>
                            <td>{{item.span}}ヶ月</td>
                        </tr>
                        <tr>
                            <td>販売価格</td>
                            <td>{{item.value}}P</td>
                        </tr>
                        <tr>
                            <td>リスク</td>
                            <td>{{item.risk * 100}}%</td>
                        </tr>
                    </table>
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
            return this.$store.state.agriculture.month;
        },
        veges() {
            return this.$store.state.agriculture.vegetables;
        },
    },
    mounted() {
    },
    methods: {
        seed(item: Vegetable) {
            this.$store.commit('agriculture/seed', item.copy());
        },
        seedAll(item: Vegetable) {
            this.$store.commit('agriculture/seedAll', item);
        },
    },
})
export default class Catalogue extends Vue {
}
</script>