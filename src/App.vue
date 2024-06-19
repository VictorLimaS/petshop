<template>
  <div class="home">
    <Header v-if="!isLoginPage && !isCadastroPage && !isAgendaPage && !isAdminPage" />
    <RouterView />
    <Footer v-if="!isLoginPage && !isCadastroPage && !isAgendaPage && !isAdminPage" />
    <Subfooter v-if="!isLoginPage && !isCadastroPage && !isAgendaPage && !isAdminPage" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Subfooter from './components/Subfooter.vue';

const route = useRoute();
const isLoginPage = computed(() => route.path === '/login');
const isCadastroPage = computed(() => route.path === '/cadastro');
const isAgendaPage = computed(() => route.path === '/agenda');
const isAdminPage = computed(() => route.path === '/admin');
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
