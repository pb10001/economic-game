<template>
    <div>
        <div class="columns">
            <div id="status" class="column is-3">
                <Status />
            </div>
            <div id="field" class="column is-9">
                <Fields />
                <div id="controls">
                    <Control />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Fields from '@/components/Fields.vue';
import Control from '@/components/Control.vue';
import Status from '@/components/Status.vue';

@Component({
    components: {
        Fields,
        Control,
        Status
    }
})
export default class Agriculture extends Vue {
}
</script>