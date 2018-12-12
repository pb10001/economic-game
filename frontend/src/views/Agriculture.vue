<template>
    <div>
        <div class="columns">
            <div id="status" class="column is-3">
                <Status />
            </div>
            <div id="field" class="column is-9">
                <div id="controls">
                    <Control />
                </div>
                <Fields />
                <Catalogue />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Fields from '@/components/Fields.vue';
import Control from '@/components/Control.vue';
import Status from '@/components/Status.vue';
import Catalogue from '@/components/Catalogue.vue';

@Component({
    components: {
        Fields,
        Control,
        Status,
        Catalogue,
    },
})
export default class Agriculture extends Vue {
}
</script>