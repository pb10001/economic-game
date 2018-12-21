<template>
    <div class="has-background-light">
        <div id="field">
            <div class="columns is-mobile">
                <div class="column" v-for="item in stacks" :key="item.id">
                    <Stack :data="item" />
                </div>
            </div>
            <button class="button is-success" @click="next">次へ</button>
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
        stacks(): any {
            return this.$store.state.stones.stacks;
        },
    },
    methods: {
        next(): void {
            this.$store.commit('stones/next');
        },
    },
})
export default class Stones extends Vue {
}
</script>