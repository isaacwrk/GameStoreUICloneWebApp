<template>
    <div>
        <p class="ml-10 mt-9 text-font-blue font-bold">Overview</p>
        <p class="ml-10 mt-2 text-gray-500 text-sm">{{text1}}</p>
        <p class="ml-10 mt-4 text-gray-500 text-sm">{{text2}}</p>
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