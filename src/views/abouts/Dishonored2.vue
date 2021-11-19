<template>
    <div>
        <InfoWallpaper icon="fas fa-angle-left" wallpaper="bg-dishonored"/>
        <InfoDescription titleGame="Dishonored 2" gameOwner="Arkane Studios"/>
        <Overview
            text1="Reprise your role as a supernatural assassin in Dishonored 2."
            text2="Dishonored 2 is set 15 years after the Lord Regent has been vanquished and the dreaded Rat Plague has passed into history. An otherworldly usurper has seized Empress Emily Kaldwin’s throne, leaving the fate of the Isles hanging in the balance."
        />
        <GameStores icon="fab fa-steam" gamePlataform="Steam"/>
        <GameStores icon="fab fa-playstation" gamePlataform="Ps "/>
        <BuyNow text="Price" priceLined="40.00" newPrice="25.00"/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
//Components
import InfoWallpaper from '@/components/InfoWallpaper.vue';
import InfoDescription from '@/components/InfoDescription.vue';
import Overview from '@/components/Overview.vue';
import GameStores from '@/components/GameStores.vue';
import BuyNow from '@/components/BuyNow.vue';

const Dishonored2About = defineComponent({
    components:{
        InfoWallpaper,
        InfoDescription,
        Overview,
        GameStores,
        BuyNow
    }
});

export default Dishonored2About;
</script>

<style>

</style>