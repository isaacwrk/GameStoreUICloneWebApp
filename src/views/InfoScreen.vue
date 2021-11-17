<template>
    <div>
        <InfoWallpaper icon="fas fa-angle-left" wallpaper="bg-forza"/>
        <InfoDescription/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import InfoWallpaper from '@/components/InfoWallpaper.vue';
import InfoDescription from '@/components/InfoDescription.vue';

const InfoScreen = defineComponent({
    components:{
        InfoWallpaper,
        InfoDescription
    }
});

export default InfoScreen;
</script>

<style>
</style>