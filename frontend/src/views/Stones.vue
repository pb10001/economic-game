<template>
    <div class="has-background-light h60">
        <div id="field">
            <div class="columns is-mobile">
                <div class="column" v-for="item in stacks" :key="item.id">
                    <Stack :data="item" />
                </div>
            </div>
            <p>ターン:{{turnNum + 1}}</p>
            <p v-if="!isEnd">{{turnNum % 2 === 0 ? '先手' : '後手'}}の番</p>
            <p v-if="winner >= 0">{{winner === 0 ? '先手': '後手'}}の勝ち!</p>
            <button v-if="!isEnd" class="button is-success is-rounded" @click="next">次へ</button>
            <button v-if="!isEnd" class="button is-warning is-rounded" @click="think">AI</button>
            <p class="multiline">{{log}}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Stack from '@/components/Stack.vue';

@Component({
    components: {
        Stack,
    },
    computed: {
        turnNum(): number {
            return this.$store.state.stones.game.turnNum;
        },
        stacks(): any {
            return this.$store.state.stones.game.piles;
        },
        winner(): number {
            return this.$store.state.stones.game.winner;
        },
        isEnd(): boolean {
            return this.$store.state.stones.game.isEnd;
        },
        message(): string {
            return this.$store.state.stones.message;
        },
        log(): string {
            return this.$store.state.stones.log;
        },
    },
    methods: {
        next(): void {
            this.$store.commit('stones/next');
        },
        think(): void {
            this.$store.commit('stones/think');
        },
    },
})
export default class Stones extends Vue {
}
</script>
<style lang="scss" scoped>
.h60 {
    min-height: 100vh;
}
.multiline {
    white-space: pre-wrap;
}
</style>
