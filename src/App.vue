<template>
  <div class="home">
    <Header v-if="!isLoginPage && !isCadastroPage" />
    <RouterView />
    <Footer v-if="!isLoginPage && !isCadastroPage" />
    <Subfooter v-if="!isLoginPage && !isCadastroPage" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Subfooter from './components/Subfooter.vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();
const isLoginPage = computed(() => route.path === '/login');
const isCadastroPage = computed(() => route.path === '/cadastro');
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
