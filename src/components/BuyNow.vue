<template>
    <div class="w-full h-7.5 bg-base-gray rounded-t-4xl mt-7">
        <div class="flex ml-10">
            <p class="text-font-blue font-bold mt-7 font-xl">{{text}}</p>
            <p class="text-gray-400 font-blue mt-7 ml-3 line-through font-normal">${{priceLined}}</p>
        </div>
        <p class="text-primary-button font-blue font-bold ml-10 mt-2 font-xl">${{newPrice}}</p>
        <button class="w-7.8 h-2.6 absolute right-8 rounded-lg -bottom-16 bg-primary-button hover:bg-primary-blue text-white">Add to Cart</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const BuyNow = defineComponent({
    props:{
        text:{
            type:String,
            required:true
        },
        priceLined:{
            type:String,
            required:true
        },
        newPrice:{
            type:String,
            required:true
        }
    }
});

export default BuyNow;
</script>

<style>

</style>