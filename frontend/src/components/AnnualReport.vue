<template>
    <div class="section">
        <div class="box">
            <p class="multiline">{{reportLog}}</p>
        </div>
        <b-modal :active.sync="isChartVisible" scroll="keep">
            <div class="card">
                <Chart />
            </div>
        </b-modal>
        <button @click="isChartVisible = true" class="button is-info">グラフを表示</button>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Chart from '@/components/Chart.vue';
@Component({
    components: {
        Chart,
    },
    data () {
        return {
            isChartVisible: false
        }
    },
    computed: {
        currentYear() {
            return this.$store.state.agriculture.year;
        },
        currentMonth() {
            return this.$store.state.agriculture.month;
        },
        log() {
            return this.$store.state.agriculture.log;
        },
        reportLog() {
            return this.$store.state.agriculture.reportLog;
        },
    },
})
export default class AnnualReport extends Vue{
}
</script>
<style lang="scss" scoped>
.box {
    max-height: 250px;
    overflow-y: scroll;
    .multiline {
        text-align: left;
        white-space: pre-wrap;
    }
}
</style>
