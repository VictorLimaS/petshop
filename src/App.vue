<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Subfooter from './components/Subfooter.vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <div class="home">
        <Header />
        <Router-view></Router-view>
        <Footer />
        <Subfooter />
    </div>
</template>

<style scoped>
.home {
    width: 100%;
    height: 100%;
}
</style>
