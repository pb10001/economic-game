<template>
    <section class="section">
        <div class="columns is-multiline is-variable is-1">
            <div class="column is-6" v-for="item in blocks" :key="item">
                <div class="block" v-if="item > 2">
                空
                </div>
                <div class="block" v-else>
                
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Field extends Vue {
    blocks = [1, 2, 3, 4];
    activated = false;
}
</script>
<style lang="sass" scoped>
.block
    background: #EEEEEE;
    height: 100px;
    border-radius: 5px;
</style>