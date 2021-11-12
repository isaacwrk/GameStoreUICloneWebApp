<template>
    <div class="whitespace-nowrap overflow-y-auto">
        <div class="flex">

            <!-- media -->
            <div class="h-28 w-28 ml-10 horizon bg-cover bg-no-repeat rounded">
            </div>

            <!-- content -->
            <div class="text-font-blue bold flex flex-wrap bg-base-gray w-44 h-24 mt-2">
                <h3 class="font-semibold text-lg leading-tight truncate"></h3>
                <p class="mt-2 mr-2 ml-5 text-base font-bold">
                    Horizon Dawn
                </p>
                <p class="text-xs text-gray-500 ml-5 font-semibold mb-10">
                    Rockstar Games
                </p>
                <div class="inline-flex flex-wrap-rev ml-5">
                    <i class="fa fa-star text-primary-button"></i>
                    <p class="text-primary-blue text-sm">4.5 (120)</p>
                </div> 
            </div>

        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const GameList = defineComponent({
});

export default GameList;
</script>

<style>
.horizon{
    background: url('~@/assets/img/horizondawnposter.jpg');
}
</style>