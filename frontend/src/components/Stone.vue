<template>
    <div class="stone">
        <svg width="40" height="40">
            <ellipse cx="20" cy="20" rx="16" ry="12" fill="#2980b9" />
        </svg>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: {
        value: Number,
    },
    components: {
    },
})
export default class Stone extends Vue {
}
</script>
<style lang="scss" scoped>
.stone {
    margin: 0 auto;
}
</style>
