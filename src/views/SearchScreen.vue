<template>
    <div class="min-h-screen">
        <SearchBar searchText="Find your game"/>
        <hr class="mt-9">
        <h1 class="mt-10 ml-10 text-font-blue font-bold">Found 32 results</h1>
        <GameList class="mt-8"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import GameList from '@/components/GameList.vue';

const SearchScreen = defineComponent({
    components:{
        SearchBar,
        GameList
    }
});

export default SearchScreen;
</script>

<style>

</style>