<template>
    <div class="relative -mt-9 bg-white rounded-t-2xl pt-8">
        <div class="relative ml-10">
            <p class="text-font-blue text-xl font-bold">{{titleGame}}</p>
            <p class="text-gray-400 font-bold">{{gameOwner}}</p>
            <i class="absolute bg-primary-button fas fa-heart rounded-full w-10 h-10 text-center p-3 left-64 bottom-1 text-white hover:bg-primary-blue"></i>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const InfoDescription = defineComponent({
    props:{
        titleGame:{
            type:String,
            required:true
        },
        gameOwner:{
            type:String,
            required:true
        }
    }
});

export default InfoDescription;
</script>

<style>

</style>