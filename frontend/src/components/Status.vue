<template>
    <div class="section">
        <p class="subtitle">所持金:{{currentMoney}}P</p>
        <div class="box">
            <p class="multiline">{{log}}</p>
        </div>
        <div class="box">
            <p class="multiline">{{reportLog}}</p>
        </div>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({
    computed: {
        currentYear() {
            return this.$store.state.agriculture.year;
        },
        currentMonth() {
            return this.$store.state.agriculture.month;
        },
        currentMoney() {
            return this.$store.state.agriculture.money;
        },
        log() {
            return this.$store.state.agriculture.log;
        },
        reportLog() {
            return this.$store.state.agriculture.reportLog;
        },
    }
})
export default class Status extends Vue{
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