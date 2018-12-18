<template>
    <div class="flex">
        <transition-group name="vl" class="flex">
            <div class="" v-for="item in veges" :key="item.name">
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
        </transition-group>
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
    },
})
export default class Catalogue extends Vue {
}
</script>
<style lang="scss" scoped>
.vl-enter-active, .vl-leave-active {
  transition: all .5s;
}
.vl-enter, .vl-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.vl-leave-active {
  position: absolute;
}
.vl-move {
  transition: transform .5s;
}
</style>