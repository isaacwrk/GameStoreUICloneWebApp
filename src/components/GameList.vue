<template>
    <div class="whitespace-nowrap overflow-y-auto">
        <div class="flex">
            <div class="flex  md:flex-row overflow-hidden bg-white">
                <!-- media -->
                <div class="h-28 w-28 ml-10 horizon bg-cover bg-no-repeat rounded">
                </div>
                <!-- content -->
                <div class="text-gray-800 flex bg-base-gray w-11 h-20">
                    <h3 class="font-semibold text-lg leading-tight truncate"></h3>
                    <p class="mt-2">
                        dsadsad
                    </p>
                    <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        &bull; 
                    </p>
                </div>
            </div><!--/ card-->
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