<template>
    <section class="section">
        <div>
            <transition-group name="vl" class="columns is-multiline is-variable is-0">
                <div class="column is-4" v-for="item in blocks" :key="item.id">
                    <div class="box earth has-text-white">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img v-if="item.vegetable.url" :src="item.vegetable.url">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p>{{item.vegetable.name}}</p>
                                <progress class="progress is-info" :value="item.vegetable.age" :max="item.vegetable.span"></progress>
                                <a class="button is-success" v-if="item.vegetable.isHarvestable" @click="harvest(item)">収穫</a>
                            </div>
                        </div>
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

@Component({
    computed: {
        blocks() {
            return this.$store.state.agriCulture.fields
        }
    },
    methods: {
        harvest(item: FieldModel) {
            this.$store.commit("agriCulture/harvest", item);
        }
    }
})
export default class Fields extends Vue {
}
</script>
<style lang="scss" scoped>
.vl-enter-active, .vl-leave-active {
  transition: all 1s;
}
.vl-enter, .vl-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.vl-leave-active {
  position: absolute;
}
.vl-move {
  transition: transform .5s;
}
.earth {
    background: #A36840;
}
</style>
