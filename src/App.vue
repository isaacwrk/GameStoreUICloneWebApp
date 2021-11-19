<template>
    <div id="nav">
        <router-link to="/"></router-link>
    </div>
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
</template>

<style>
</style>
