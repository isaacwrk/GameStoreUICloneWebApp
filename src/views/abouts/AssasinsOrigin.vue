<template>
    <div>
        <InfoWallpaper icon="fas fa-angle-left" wallpaper="bg-origins"/>
        <InfoDescription titleGame="Assasins Creed Origins" gameOwner="Ubisoft"/>
        <Overview
            text1="Assassin's Creed Origins is an action-adventure stealth game played from a third-person perspective. Players complete quests—linear scenarios with set objectives to progress through the story."
            text2="Origins moved to a hit-box system.There are two modes of melee attack—light attacks are fast but weak, and heavy attacks are slow but strong. Complementing this is the way weapons fall into different categories (common, rare and legendary) and are rated on the damage dealt, speed and range"
        />
        <GameStores icon="fab fa-steam" gamePlataform="Steam"/>
        <GameStores icon="fab fa-xbox" gamePlataform="Xbox"/>
        <BuyNow text="Price" priceLined="35.00" newPrice="30.00"/>
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

const AssasinsOrigin = defineComponent({
    components:{
        InfoWallpaper,
        InfoDescription,
        Overview,
        GameStores,
        BuyNow
    }
});

export default AssasinsOrigin;
</script>

<style>

</style>