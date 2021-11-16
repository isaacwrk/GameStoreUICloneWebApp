<template>

    <div class="flex items-center">
        <!-- media -->
        <div class="h-28 w-28 ml-10  bg-cover bg-no-repeat rounded" :class="poster">
        </div>

        <!-- content -->
        <div class="text-font-blue bold  bg-base-gray w-44 h-24 flex-1 flex flex-col">
            <p class="mt-2 mr-2 ml-5 text-base font-bold">
                {{titleGame}}
            </p>
            <p class="text-xs text-gray-500 ml-5 font-semibold mb-4">
                {{gameOwn}}
            </p>
            <div class="flex items-center mb-2 ml-5">
                <i class="fa fa-star text-primary-button"></i>
                <p class="text-primary-blue text-sm">{{starRate}}</p>
                <p class="text-primary-button ml-12 font-bold text-sm">${{price}}</p>
            </div>
        </div>
    </div>
   
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const GameList = defineComponent({
    props:{
        titleGame:{
            type:String,
            required: true,
        },
        gameOwn:{
            type:String,
            required:true
        },
        starRate:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        poster:{
            type:String,
            required:true
        }
    }
});

export default GameList;
</script>

<style>
.horizon{
    background: url('~@/assets/img/horizondawnposter.jpg');
}
.dishonored{
    background: url('~@/assets/img/dishonored2poster.jpg');
}
.forza{
    background: url('~@/assets/img/forza4poster.jpg');
}
.assasins{
    background: url('~@/assets/img/acoriginposter.jpg');
}
.reddead{
    background: url('~@/assets/img/reddeadposter.jpg');
}
</style>