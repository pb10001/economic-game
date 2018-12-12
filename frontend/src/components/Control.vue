<template>
    <div>
        <div class="buttons has-addons">
            <span @click="harvestAll" class="button is-primary is-outlined">すべて収穫</span>
            <span class="button is-primary is-outlined">セーブ</span>
            <span @click="next" class="button is-primary is-outlined">次の月へ</span>
        </div>
        <div class="buttons has-addons">
            <span @click="addField" class="button is-danger is-outlined">農地拡大</span>
            <span @click="sellField" class="button is-danger is-outlined">農地売却</span>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vegetable from '../vegetable';
@Component({
    computed: {
    },
    mounted() {
    },
    methods: {
        next() {
            this.$store.commit('agriCulture/nextMonth');
        },
        seed(item: Vegetable) {
            this.$store.commit('agriCulture/seed', item.copy());
        },
        harvestAll() {
            this.$store.commit('agriCulture/harvestAll');
        },
        addField() {
            this.$dialog.confirm({
                message:'50000P消費します。続けますか？',
                onConfirm: () => this.$store.commit('agriCulture/addField'),
            })
        },
        sellField() {
            this.$dialog.confirm({
                message:'40000Pで農地を1つ手放します。続けますか？',
                onConfirm: () => this.$store.commit('agriCulture/sellField'),
            })
        },
    },
})
export default class Control extends Vue {
}
</script>