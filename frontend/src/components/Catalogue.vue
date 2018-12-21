<template>
    <div>
        <table class=" table is-striped">
            <tr>
                <th>野菜</th>
                <th>種の価格</th>
                <th>栽培期間</th>
                <th>販売価格</th>
                <th>リスク</th>
            </tr>
            <tr  v-for="item in veges" :key="item.name">
                <td>
                    <img :src="item.url" width="32px">
                    <span>{{item.name}}</span>
                </td>
                <td>{{item.initPrice}}P</td>
                <td>{{item.span}}ヶ月</td>
                <td>{{item.value}}P</td>
                <td>{{item.risk * 100}}%</td>
            </tr>
        </table>
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