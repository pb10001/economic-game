<template>
    <div>
        <div id="status">
            <Status />
        </div>
        <div id="field">
            <Field />
        </div>
        <div id="controls">
            <Control />
        </div>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Field from '@/components/Field';
import Control from '@/components/Control';
import Status from '@/components/Status';

@Component({
    components: {
        Field,
        Control,
        Status
    }
})
export default class Agriculture extends Vue {
}
</script>