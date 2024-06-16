<script setup>
import Header from './components/Header.vue';
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';
import Subfooter from './components/Subfooter.vue';

</script>

<template>
    <div class="home">
        <Header />
        <Home />
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
