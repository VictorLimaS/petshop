<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Logo from '../components/Logo.vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const router = useRouter();
const auth = getAuth();

const goToHomePage = () => {
    router.push('/');
};

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref(null);

const cadastrar = async () => {
    if (password.value !== confirmPassword.value) {
        error.value = 'As senhas não coincidem.';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log('Usuário cadastrado:', userCredential.user);
        router.push('/'); // Redireciona para a página inicial após o cadastro
    } catch (err) {
        console.error('Erro ao cadastrar:', err.message);
        error.value = err.message;
    }
};
</script>

<template>
    <div class="cadastro">
        <div class="top">
            <Logo class="large-logo" />
            <button @click="goToHomePage">Página inicial</button>
        </div>
        <div class="form">
            <h3>FAÇA SEU CADASTRO</h3>
            <hr>
            <input v-model="email" type="email" placeholder="E-mail">
            <input v-model="password" type="password" placeholder="Senha">
            <input v-model="confirmPassword" type="password" placeholder="Confirme sua senha">
            <p v-if="error" class="error">{{ error }}</p>
            <button @click="cadastrar">Cadastrar</button>
        </div>
    </div>
</template>

<style scoped>
.large-logo {
    width: auto;
    height: 100%;
}
    
.cadastro {
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
    background-color: #CFCFCF;
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
    margin: .5rem 0 2rem 0;
}

input {
    width: 90%;
    height: 20%;
    margin: 0.5rem 0;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid black;
    padding: 0 1rem;
    font-size: 1rem;
}

button {
    height: 50px;
    padding: .4rem 8rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid rgb(105, 103, 103);
    cursor: pointer;
    margin-top: 2rem;
}

.error {
    color: red;
    margin-top: 0.5rem;
}
</style>
