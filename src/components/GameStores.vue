<template>
    <div class="relative">
        <div class="flex ml-10 mt-4">
            <p class="w-11 h-11 bg-black rounded">
                <i class="fab fa-steam text-white text-3xl p-1"  aria-hidden="true"></i>
            </p>
            <div class="relative">
                <p class="text-primary-blue font-bold ml-3">Steam</p>
                <p class="text-gray-400 font-bold ml-3 text-xs">Avaliable</p>
            </div>
            <div class="flex ml-28 mt-3">
                <i class="fa fa-star text-primary-blue" aria-hidden="true"></i>
                <i class="fa fa-star text-primary-blue" aria-hidden="true"></i>
                <i class="fa fa-star text-primary-blue" aria-hidden="true"></i>
                <i class="fa fa-star text-primary-blue" aria-hidden="true"></i>
                <i class="fa fa-star text-primary-blue opacity-40" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const GameStores = defineComponent({
    props:{
        icon:{
            type:String,
            required:true
        }
    }
});

export default GameStores;
</script>

<style>

</style>