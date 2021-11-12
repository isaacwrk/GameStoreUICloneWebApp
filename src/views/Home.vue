<template>
    <div class="home text-red-200 bg-gray-500">
        hi
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {}
</script>
