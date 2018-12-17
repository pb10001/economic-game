<template>
    <div>
        <div class="box has-background-light">
            <div class="columns">
                <div id="status" class="column is-6">
                    <Control class="mb" />
                    <Fields />
                    <Debts />
                    <div class="columns">
                        <Status class="column" />
                        <AnnualReport class="column" />
                    </div>
                </div>
                <div id="field" class="column is-6 section">
                    <div id="controls">
                        <Catalogue />
                    </div>
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
import Catalogue from '@/components/Catalogue.vue';
import Debts from '@/components/Debts.vue';
import AnnualReport from '@/components/AnnualReport.vue';

@Component({
    components: {
        Fields,
        Control,
        Status,
        Catalogue,
        Debts,
        AnnualReport,
    },
})
export default class Agriculture extends Vue {
}
</script>