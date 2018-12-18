<template>
    <div>
        <div class="has-background-light">
            <div id="status" class="columns">
                <div class="column">
                    <Control class="mb" />
                    <Fields />
                    <Debts />
                </div>
                <div class="column">
                    <div class="">
                        <Status class="mb" />
                        <AnnualReport class="" />
                    </div>
                </div>
            </div>
        </div>
        <div id="field" class="section">
            <div id="controls">
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