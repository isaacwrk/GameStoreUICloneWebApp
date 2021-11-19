<template>
    <div class="min-h-screen mb-10">
        <SearchBar searchText="Find your game"/>
        <hr class="mt-9">
        <h1 class="mt-10 ml-10 text-font-blue font-bold">Found 5 results</h1>
        <div class="relative">
            <Game class="mt-6" titleGame="Assasins Creed Origins" gameOwn="Ubisoft" price="40.00" starRate="3.7(40)" poster="assasins"
                  :selected="$route.name == 'assasinsinfo'" @click="$router.replace({name:'assasinsinfo'})"/>
            <Game class="mt-6" titleGame="Horizon: New Dawn" gameOwn="Guerrilla Games" price="90.00" starRate="4.7(140)" poster="horizon"/>
            <Game class="mt-6" titleGame="Dishonored 2" gameOwn="Arkane Studios" price="45.00" starRate="4.0(200)" poster="dishonored"
                  :selected="$route.name == 'dishonoredinfo'" @click="$router.replace({name:'dishonoredinfo'})"/>
            <Game class="mt-6" titleGame="Forza 4" gameOwn="Playground Games" price="65.00" starRate="4.2(140)" poster="forza"
                  :selected="$route.name == 'forzainfo'" @click="$router.replace({name:'forzainfo'})"/>
            <Game class="mt-6" titleGame="Red Dead 2" gameOwn="Rockstar Games" price="80.00" starRate="4.7(450)" poster="reddead"/>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import Game from '@/components/GameList.vue';

const SearchScreen = defineComponent({
    components:{
        SearchBar,
        Game
    }
});

export default SearchScreen;
</script>

<style>

</style>