<script setup>
import { ref } from 'vue';
import Logo from '../components/Logo.vue';
import Calendario from '../components/Calendario.vue';
import { useRouter } from 'vue-router';
import { db } from '../firebase/firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const router = useRouter();

const selectedTime = ref(null);
const selectTime = (time) => {
  selectedTime.value = time;
};

const navigateToHome = () => {
  router.push('/');
};

const showDropdownAtendimento = ref(false);
const atendimentoOptions = ['Banho', 'Tosa', 'Banho/Tosa'];
const atendimentoValue = ref('');

const toggleDropdownAtendimento = () => {
  showDropdownAtendimento.value = !showDropdownAtendimento.value;
};

const selectAtendimento = (option) => {
  atendimentoValue.value = option;
  showDropdownAtendimento.value = false;
};

const showDropdownTipo = ref(false);
const tipoOptions = ['Gato', 'Cachorro'];
const tipoValue = ref('');

const toggleDropdownTipo = () => {
  showDropdownTipo.value = !showDropdownTipo.value;
};

const selectTipo = (option) => {
  tipoValue.value = option;
  showDropdownTipo.value = false;
};

const nome = ref('');
const nomePet = ref('');
const selectedDate = ref(null); // Assuming you have a way to get the selected date from your Calendario component

const agendar = async () => {
  if (nome.value && nomePet.value && tipoValue.value && atendimentoValue.value && selectedDate.value && selectedTime.value) {
    try {
      const docRef = await addDoc(collection(db, "agendamentos"), {
        nome: nome.value,
        nomePet: nomePet.value,
        tipo: tipoValue.value,
        atendimento: atendimentoValue.value,
        data: selectedDate.value,
        hora: selectedTime.value,
      });
      console.log("Document written with ID: ", docRef.id);
      router.push('/'); // Navigate to home page or success page
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
};
</script>


<template>
  <div class="cadastro">
    <div class="top">
      <Logo class="large-logo" />
      <button @click="navigateToHome">Página inicial</button>
    </div>
    <div class="form">
      <h3>AGENDAMENTO</h3>
      <hr>
      <div class="inputs">
        <div class="left">
          <input type="text" placeholder="Seu nome">
          <div class="dropdown-container">
            <input type="text" placeholder="Tipo" v-model="tipoValue" @click="toggleDropdownTipo" readonly>
            <ul v-if="showDropdownTipo" class="dropdown">
              <li v-for="option in tipoOptions" :key="option" @click="selectTipo(option)">
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <input type="text" placeholder="Nome do Pet">
          <div class="dropdown-container">
            <input type="text" placeholder="Atendimento" v-model="atendimentoValue" @click="toggleDropdownAtendimento" readonly>
            <ul v-if="showDropdownAtendimento" class="dropdown">
              <li v-for="option in atendimentoOptions" :key="option" @click="selectAtendimento(option)">
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="agendar">
        <div class="calendar">
          <Calendario />
        </div>
        <div class="horario">
          <div class="times">
            <label :class="{ selected: selectedTime === '09:00' }" @click="selectTime('09:00')">09:00</label>
            <label :class="{ selected: selectedTime === '11:00' }" @click="selectTime('11:00')">11:00</label>
            <label :class="{ selected: selectedTime === '14:00' }" @click="selectTime('14:00')">14:00</label>
            <label :class="{ selected: selectedTime === '15:00' }" @click="selectTime('15:00')">15:00</label>
          </div>
          <div class="button">
            <button>AGENDAR</button>
            <p><ion-icon name="cut-outline"></ion-icon> Pagamento no final do atendimento</p>
          </div>
        </div>
      </div>
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
    height: 15rem;
}

.top button {
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

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #CFCFCF;
    width: 80%;
    height: 60%;
    padding: 1rem 2rem;
    border-radius: 10px;
}

hr {
    width: 30%;
    height: 5px;
    background-color: black;
    border: 3px solid black;
    border-radius: 5px;     
    margin: .5rem 0 2rem 0; 
}

input {
    width: 100%;
    margin: .2rem;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 1rem;
    padding: 1rem 1rem;
    color: black;
}

.inputs {
    display: flex;
    gap: .5rem;
    justify-content: center;
    width: 100%;
}

.inputs .left,
.inputs .right {
    width: 50%;
}

.agendar {
    display: flex;
    align-items: center;
    gap: 10rem;
}

.horario {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 80%;
}

.times {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 10px;
}

label {
    flex: 1 1 45%;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 10px;
    padding: 10px 25px;
    cursor: pointer;
    font-size: 1.2rem;
}

label.selected {
    color: rgb(32, 181, 32);
    text-shadow: 1px 1px 2px #2f7122cc;
}

.button {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.button button {
    padding: .4rem 4rem;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid rgb(50, 199, 50);
    cursor: pointer;
}

.dropdown-container {
    position: relative;
    width: 100%;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    z-index: 10;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
}

.dropdown li {
    padding: 1rem;
    border-bottom: 1px solid black;
    cursor: pointer;
}

.dropdown li:last-child {
    border-bottom: none;
}

.dropdown li:hover {
    background-color: #CFCFCF;
}

p {
    display: flex;
    align-items: center;
    gap: .5rem;
}
</style>
