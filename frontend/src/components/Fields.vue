<template>
    <section class="section">
        <div>
            <transition-group name="bl" class="columns is-multiline is-variable is-1">
                <div class="column is-4" v-for="item in blocks" :key="item.id">
                    <div class="card has-text-white">
                        <div class="card-content earth">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img v-if="item.vegetable.url" :src="item.vegetable.url">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p>{{item.vegetable.name}}</p>
                                    <p v-if="item.vegetable.name !== '空'">{{item.vegetable.age}}ヶ月目</p>
                                </div>
                            </div>
                        </div>
                        <footer class="card-footer" v-if="item.vegetable.isHarvestable">
                            <a class="card-footer-item" @click="harvest(item)">収穫</a>
                        </footer>
                    </div>
                </div>
            </transition-group>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FieldModel from '../field';
import Vegetable from '../vegetable';

interface IBlocks {
    blocks: FieldModel[]
}
@Component({
    mounted() {
        this.blocks = this.$store.state.agriCulture.fields
    },
    methods: {
        harvest(item: FieldModel) {
            this.$store.commit("agriCulture/harvest", item);
        }
    }
})
export default class Fields extends Vue implements IBlocks {
    blocks: FieldModel[] = []
    activated: boolean = false;
}
</script>
<style lang="scss" scoped>
.card {
    border-radius: 5px;
}
.bl-enter-active, .bl-leave-active {
  transition: all 1s;
}
.bl-enter, .bl-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.earth {
    background: #A36840;
}
</style>