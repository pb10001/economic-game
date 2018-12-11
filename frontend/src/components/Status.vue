<template>
    <div>
        <div class="section">
            <div class="notification is-info">
                <p>{{currentYear}}年目，{{currentMonth}}月</p>
                <p>所持金:{{currentMoney}}P</p>
            </div>
            <div class="box">
                <p class="multiline">{{log}}</p>
            </div>
            <div class="box">
                <p class="multiline">{{reportLog}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({
    computed: {
        currentYear() {
            return this.$store.state.agriCulture.year;
        },
        currentMonth() {
            return this.$store.state.agriCulture.month;
        },
        currentMoney() {
            return this.$store.state.agriCulture.money;
        },
        log() {
            return this.$store.state.agriCulture.log;
        },
        reportLog() {
            return this.$store.state.agriCulture.reportLog;
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
        white-space: pre-wrap;
    }
}
</style>