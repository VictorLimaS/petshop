<template>
  <div class="dropdown" v-if="visivel">
    <ul>
      <template v-if="loggedIn">
        <li><a @click="logout">Sair</a></li>
      </template>
      <template v-else>
        <li><a @click="navegarPara('login')">Login</a></li>
        <li><a @click="navegarPara('cadastro')">Cadastrar</a></li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  visivel: {
    type: Boolean,
    default: false,
  },
  loggedIn: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['logout', 'update:visivel']);
const router = useRouter();

const esconderDropdown = () => {
  emit('update:visivel', false);
};

const navegarPara = (rota) => {
  esconderDropdown();
  if (rota === 'login') {
    router.push('/login');
  } else if (rota === 'cadastro') {
    router.push('/cadastro');
  }
};

const logout = () => {
  esconderDropdown();
  emit('logout'); 
};

</script>

<style scoped>
.dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  z-index: 1000;
  top: 30px;
  right: 0;
}

.dropdown ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 10px;
}

.dropdown li a {
  text-decoration: none;
  color: black;
  display: block;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #f0f0f0;
}
</style>
