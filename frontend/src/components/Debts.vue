<template>
    <section v-if="debts.length > 0">
        <div>
            <transition-group name="vl" class="flex">
                <div class="" v-for="item in debts" :key="item.id">
                    <div class="box has-background-danger has-text-white">
                        <div class="content">
                            <p>元本: {{item.principal}}</p>
                            <p>合計額: {{item.total}}</p>
                            <a class="button is-success is-small" @click="payback(item)">返済</a>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Debt from '../debt';

@Component({
    computed: {
        debts(): Debt[] {
            return this.$store.state.agriculture.debts;
        }
    },
    methods: {
        payback(item: Debt): void {
            this.$store.commit('agriculture/payback', item);
        }
    }
})
export default class Debts extends Vue {
}
</script>
<style lang="scss" scoped>
.vl-enter-active, .vl-leave-active {
  transition: all .5s;
}
.vl-enter, .vl-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.vl-leave-active {
  position: absolute;
}
.vl-move {
  transition: transform .5s;
}
</style>
