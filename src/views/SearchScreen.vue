<template>
    <div class="min-h-screen">
        <SearchBar searchText="Find your Genre.."/>
        <hr class="mt-9">
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';

const SearchScreen = defineComponent({
    components:{
        SearchBar
    }
});

export default SearchScreen;
</script>

<style>

</style>