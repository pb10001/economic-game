<template>
    <section class="section">
        <div class="columns is-multiline is-variable is-1">
            <div class="column is-6" v-for="item in blocks" :key="item.id">
                <div class="block">
                    <p>{{item.vegetable.name}}</p>
                    <p v-if="item.vegetable.name !== '空'">{{item.vegetable.age}}ヶ月目</p>
                    <button @click="harvest(item)" v-if="item.vegetable.isHarvestable" class="button is-success">収穫</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FieldModel from '../field';
import Vegetable from '../vegetable';
@Component({
    mounted() {
        this.blocks = this.$store.state.agriCulture.fields
        this.blocks[0].vegetable = this.$store.state.agriCulture.vegetables.carrot;
    },
    methods: {
        harvest(item: FieldModel) {
            this.$store.commit("agriCulture/harvest", item);
        }
    }
})
export default class Fields extends Vue {
    blocks: Vegetable[] = [];
    activated = false;
}
</script>
<style lang="scss" scoped>
.block {
    background: #EEEEEE;
    height: 100px;
    border-radius: 5px;
}
</style>