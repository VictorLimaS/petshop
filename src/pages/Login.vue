<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Logo from '../components/Logo.vue';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        localStorage.setItem('userLoggedIn', JSON.stringify(user));

        router.push('/');
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        errorMessage.value = error.message;
    }
};

const goToHomePage = () => {
    router.push('/');
};
</script>

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
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <button @click="login">Login</button>
        </div>x
    </div>
</template>


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
    padding: .4rem 8rem;
    font-size: 1.3rem;
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
