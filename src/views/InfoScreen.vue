<template>
    <div>
        <InfoWallpaper icon="fas fa-angle-left" wallpaper="bg-forza"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import InfoWallpaper from '@/components/InfoWallpaper.vue';

const InfoScreen = defineComponent({
    components:{
        InfoWallpaper
    }
});

export default InfoScreen;
</script>

<style>
</style>