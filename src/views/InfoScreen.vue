<template>
    <div>
        <InfoWallpaper icon="fas fa-angle-left" wallpaper="bg-forza"/>
        <InfoDescription/>
        <Overview
            text1="Forza Horizon 4 - abbreviated as FH4 - is an open-world racing game developed by Playground Games and Turn 10 Studios, the Steam release was developed by Sumo Digital. The game is set in Great Britain."
            text2="The title is set in a 'heavily-stylised version of Britain within' Scotland and the Lake District of North West England. It features Edinburgh and villages in Cotswolds as one of many locations."
        />
        <GameStores icon="fab fa-steam" gamePlataform="Steam"/>
        <GameStores icon="fab fa-xbox" gamePlataform="Xbox"/>
        <BuyNow text="Price" priceLined="30.00" newPrice="20.00"/>
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

const InfoScreen = defineComponent({
    components:{
        InfoWallpaper,
        InfoDescription,
        Overview,
        GameStores,
        BuyNow
    }
});

export default InfoScreen;
</script>

<style>
</style>