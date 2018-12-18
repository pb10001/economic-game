<template>
    <div class="section has-background-white scrollable">
        <div class="">
            <p class="multiline">{{log}}</p>
        </div>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Chart from '@/components/Chart.vue';
@Component({
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
export default class Status extends Vue{
}
</script>
<style lang="scss" scoped>
.scrollable {
    max-height: 250px;
    overflow-y: scroll;
    .multiline {
        text-align: left;
        white-space: pre-wrap;
    }
}
</style>
