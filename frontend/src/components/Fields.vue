<template>
    <section>
        <div>
            <transition-group name="vl" class="flex">
                <div class="" v-for="item in blocks" :key="item.id">
                    <div class="box earth has-text-white">
                        <div class="media">
                            <div v-if="!item.vegetable.isEmpty()" class="media-left">
                                <figure class="image is-64x64 mb">
                                    <img v-if="item.vegetable.url" :src="item.vegetable.url">
                                    <progress class="progress is-success is-small" :value="item.vegetable.age" :max="item.vegetable.span"></progress>
                                </figure>
                            </div>
                            <div class="media-content">
                                <p v-if="!item.vegetable.isEmpty()">{{item.vegetable.name}}</p>
                                <a class="button is-primary" v-if="item.vegetable.isHarvestable" @click="harvest(item)">収穫</a>
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
            return this.$store.state.agriculture.fields
        }
    },
    methods: {
        harvest(item: FieldModel) {
            this.$store.commit("agriculture/harvest", item);
        }
    }
})
export default class Fields extends Vue {
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
.earth {
    background: #A36840;
}
</style>
