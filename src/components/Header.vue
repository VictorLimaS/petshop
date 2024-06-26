<template>
  <div class="top">
    <p><ion-icon name="rocket-outline"></ion-icon>Frete grátis a partir de R$49</p>
  </div>
  <header class="header">
    <Carrinho title="Carrinho"
              :visible="cartVisivel"
              @update:visible="mudarVisibilidadeCarrinho"></Carrinho>
    <div class="logo">
      <Logo />
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#">Novidades</a></li>
        <li><a href="#">Cachorros</a></li>
        <li><a href="#">Gatos</a></li>
        <li><a href="#">Pássaros</a></li>
        <li ><a href="#">Roedores</a></li>
        <router-link v-if="loggedIn" class="custo" to="/agenda">
          <ion-icon name="calendar-outline"></ion-icon>Agendar
        </router-link>
        <router-link v-else class="custo" to="/login">
          <ion-icon name="calendar-outline"></ion-icon>Agendar
        </router-link>
      </ul>
    </nav>
    <div class="icons">
      <div class="icon-container" @mouseover="mostrarDropdown" @mouseleave="esconderDropdown">
        <span v-if="loggedIn">{{ userEmail }}</span><ion-icon name="person-outline"></ion-icon>
        <Drop :visivel="dropdownVisivel" :loggedIn="loggedIn" @logout="logout" />
      </div>
      <ion-icon name="cart-outline" @click="mudarVisibilidadeCarrinho"></ion-icon>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Logo from './Logo.vue';
import Carrinho from '../components/Carrinho.vue';
import Drop from '../components/Drop.vue';
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();

const cartVisivel = ref(false);
const dropdownVisivel = ref(false);
const loggedIn = ref(false);
const userEmail = ref('');

const isLocalStorageAvailable = typeof localStorage !== 'undefined';

onAuthStateChanged(auth, (user) => {
  if (user) {
    loggedIn.value = true;
    userEmail.value = user.email;
  } else {
    loggedIn.value = false;
    userEmail.value = '';
  }
});

const logout = async () => {
  try {
    await signOut(auth);
    if (isLocalStorageAvailable) {
      localStorage.removeItem('userLoggedIn'); 
    }
    loggedIn.value = false;
    userEmail.value = ''; 
    router.push('/');
  } catch (error) {
    console.error('Erro ao fazer logout:', error.message);
  }
};

const mudarVisibilidadeCarrinho = () => {
  cartVisivel.value = !cartVisivel.value;
};

const mostrarDropdown = () => {
  dropdownVisivel.value = true;
};

const esconderDropdown = () => {
  dropdownVisivel.value = false;
};

onMounted(() => {
  if (isLocalStorageAvailable && localStorage.getItem('userLoggedIn')) {
    loggedIn.value = true;
    userEmail.value = JSON.parse(localStorage.getItem('userLoggedIn')).email; 
  }
});

const navigateToLogin = () => {
  if (!loggedIn.value) {
    router.push('/login');
  }
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
  padding: 5px 0;
}

.top p {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
}

.top p ion-icon {
  font-size: 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  background-color: #ffffff;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.header ion-icon {
  font-size: 28px;
  cursor: pointer;
  position: relative;
}

.header .icons {
  display: flex;
  gap: 10px;
}

.icon-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
}

.logo img {
  max-width: 100px;
}

.menu ul {
  list-style-type: none;
  display: flex;
  gap: 50px;
}

.menu li a {
  gap: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 23px;
  color: black;
}

.menu .custo {
  gap: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 23px;
  color: black;
}

.icons img {
  max-width: 40px;
  margin-left: 10px;
}
</style>
