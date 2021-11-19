<template>
    <div class="h-48">
        <p class="ml-10 mt-5 text-font-blue font-bold">Overview</p>
        <p class="ml-10 mt-2 mr-3 text-gray-500 text-xs">{{text1}}</p>
        <p class="ml-10 mt-4 mr-3 text-gray-500 text-xs">{{text2}}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Overview = defineComponent({
    props:{
        text1:{
            type:String,
            required:true
        },
        text2:{
            type:String,
            required:true
        }
    }
});

export default Overview;
</script>

<style>

</style>