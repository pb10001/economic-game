<template>
    <div>
        <svg width="450" height="450">
            <line :x1="l.x1" :y1="l.y1" :x2="l.x2" :y2="l.y2" stroke="black" v-for="l in lines" :key="l.id" />
            <circle @click="alert" :cx="p.x" :cy="p.y" r="20" :fill="p.color" stroke="black" v-for="p in pieces" :key="p.id" />
            <rect :x="w.x" :y="w.y" :width="w.width" :height="w.height" fill="red" v-for="w in walls" :key="w.id"/>
        </svg>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const thickness: number = 10;
const setWall = (id: number, x: number, y: number, isVertical: boolean): any => {
    if (isVertical) {
        return {id: 100 + id, x: 50 * x - thickness / 2, y: 50 * y, width: 10, height: 100};
    } else {
        return {id: 100 + id, x: 50 * x, y: 50 * y - thickness / 2, width: 100, height: 10};
    }
};
const setPiece = (id: number, x: number, y: number, color: string): any => {
    return {id: 1000 + id, x: x * 50 - 25, y: y * 50 - 25, color};
};
@Component({
    computed: {
        lines() {
           const lines = [];
            for (let  i =0 ; i <10 ;i++) {
                lines.push({id: i, x1:  i *50, y1: 0, x2:  i *50, y2: 450});
                lines.push({id: 11 +i ,x1: 0, y1:  i *50, x2: 450, y2:  i *50});
            }
            return lines;
        },
        walls() {
            return [
                setWall(1, 2, 3, false),
                setWall(2, 5, 5, true),
            ];
        },
        pieces() {
            return [
                setPiece(1, 5, 1 ,'white'),
                setPiece(2, 5, 9 ,'black'),
            ];
         }
    },
    methods: {
        alert(): void {
            this.$toast.open({
                type :'is-danger',
                message :'aaa',
            });
        },
     },
})
export default class Proto extends Vue {
}
</script>
