<template>
    <div class="">
        <header class="relative bg-cover bg-no-repeat h-64 w-full" :class="wallpaper">
            <div class="absolute  w-10 h-10 text-center bg-white hover:bg-primary-blue rounded top-14 left-7">
                <router-link to="/"><i :class="icon" class="p-1 text-2xl hover:text-white" aria-hidden="true"></i></router-link>
            </div>
        </header>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const InfoWallpaper = defineComponent({
    props:{
        wallpaper:{
            type:String,
            required:true
        },
        icon:{
            type:String,
            required:true
        }
    }
});

export default InfoWallpaper;
</script>

<style>

</style>