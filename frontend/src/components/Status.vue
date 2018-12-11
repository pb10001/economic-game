<template>
    <div>
        <div class="">
            <p>プレイヤー</p>
            <p>{{currentYear}}年目，{{currentMonth}}月</p>
            <p>所持金:{{currentMoney}}P</p>
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
        }
    }
})
export default class Status extends Vue{
}
</script>