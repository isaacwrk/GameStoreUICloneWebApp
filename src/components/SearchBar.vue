<template>
    
    <div class="flex flex-1 mt-10 justify-center">
        <div class="flex border-2 rounded w-72 h-10">
            <button class="flex items-center justify-center px-4">
                <i class="fa fa-search text-gray-400 "></i>
            </button>
            <input type="text" class="px-4 py-2 w-80 " :placeholder="searchText">
            <i class="fa fa-sliders-h text-gray-400  hover:text-green-500 hover:cursor-pointer mt-3 mr-4"></i> 
        </div>
    </div>

   
    
    
    
    
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const SearchBar = defineComponent({
    props:{
        searchText:{
            type:String,
            required:true
        }
    }
});

export default SearchBar;
</script>

<style>

</style>