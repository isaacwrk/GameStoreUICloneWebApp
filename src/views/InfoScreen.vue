<template>
    <div>
        <InfoWallpaper icon="fas fa-angle-left" wallpaper="bg-forza"/>
        <InfoDescription/>
        <Overview
            text1="Forza Horizon 4 - abbreviated as FH4 - is an open-world racing game developed by Playground Games and Turn 10 Studios, the Steam release was developed by Sumo Digital. The game is set in Great Britain."
            text2="The title is set in a 'heavily-stylised version of Britain within' Scotland and the Lake District of North West England. It features Edinburgh and villages in Cotswolds as one of many locations."
        />
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import InfoWallpaper from '@/components/InfoWallpaper.vue';
import InfoDescription from '@/components/InfoDescription.vue';
import Overview from '@/components/Overview.vue';

const InfoScreen = defineComponent({
    components:{
        InfoWallpaper,
        InfoDescription,
        Overview
    }
});

export default InfoScreen;
</script>

<style>
</style>