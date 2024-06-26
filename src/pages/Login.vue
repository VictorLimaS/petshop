<template>
  <div class="login">
    <div class="top">
      <Logo class="large-logo" />
      <button @click="goToHomePage">Página inicial</button>
    </div>
    <div class="form">
      <h3>FAÇA SEU LOGIN</h3>
      <hr>
      <input v-model="email" type="email" placeholder="E-mail">
      <input v-model="password" type="password" placeholder="Senha">
      <button @click="login" :disabled="loading">Login</button>
      <div v-if="loading" class="loading-spinner"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import Logo from '../components/Logo.vue';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const router = useRouter();

const email = ref('');
const password = ref('');
const loading = ref(false);

const login = async () => {
  if (!email.value || !password.value) {
    toast.error('Por favor, preencha todos os campos.');
    return;
  }

  try {
    loading.value = true; 
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    if (user.email === 'admin@hotmail.com') {
      router.push('/admin'); 
    } else {
      router.push('/'); 
    }
  } catch (error) {
    toast.error('Credenciais inválidas. Verifique seu e-mail e senha.');
  } finally {
    loading.value = false; 
  }
};

const goToHomePage = () => {
  router.push('/');
};
</script>


<style scoped>
.large-logo {
  width: auto;
  height: 100%;
}

.login {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  width: 100%;
  height: 17rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cfcfcf;
  width: 25%;
  height: 45%;
  padding: 1rem 2rem;
  border-radius: 10px;
}

hr {
  width: 80%;
  height: 5px;
  background-color: black;
  border: none;
  border-radius: 5px;
  margin: 0.5rem 0 2rem 0;
}

input {
  width: 90%;
  height: 17%;
  margin: 0.5rem 0;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 1rem;
  padding: 0 1rem;
}

button {
  height: 50px;
  padding: 0.4rem 8rem;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid rgb(105, 103, 103);
  cursor: pointer;
  margin-top: 2rem;
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-left: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
