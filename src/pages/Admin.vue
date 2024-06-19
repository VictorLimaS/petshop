<template>
  <div class="admin">
    <div class="form">
      <div class="form-header">
        <span>Nome</span>
        <span>Nome do pet</span>
        <span>Data</span>
        <span>Horário</span>
        <span>Tipo</span>
        <span>Serviço</span>
        <span>Status</span>
        <span>Apagar</span>
      </div>
      <div class="form-body">
        <div v-for="appointment in appointments" :key="appointment.id" class="form-row">
          <span>{{ appointment.nome }}</span>
          <span>{{ appointment.nomePet }}</span>
          <span>{{ formatDate(appointment.data) }}</span>
          <span>{{ appointment.hora }}</span>
          <span>{{ appointment.tipo }}</span>
          <span>{{ appointment.atendimento }}</span>
          <span>
            <select v-model="appointment.status" @change="updateStatus(appointment.id, appointment.status)" :class="getStatusClass(appointment.status)">
              <option class="status-agendado" value="AGENDADO">AGENDADO</option>
              <option class="status-aceito" value="ACEITO">ACEITO</option>
              <option class="status-andamento" value="EM ANDAMENTO">EM ANDAMENTO</option>
              <option class="status-cancelado" value="CANCELADO">CANCELADO</option>
              <option class="status-finalizado" value="FINALIZADO">FINALIZADO</option>
            </select>
          </span>
          <span class="delete-icon" @click="deleteAppointment(appointment.id)">🗑️</span>
        </div>
      </div>
      <button @click="goToHomePage">Página inicial</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { db } from '../firebase/firebase';
import { ref as dbRef, onValue, update, remove } from "firebase/database";

const appointments = ref([]);
const router = useRouter();

onMounted(() => {
  const appointmentsRef = dbRef(db, 'agendamentos'); 
  onValue(appointmentsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      appointments.value = Object.keys(data).map(key => ({
        id: key,
        ...data[key],
        status: data[key].status || 'AGENDADO'
      }));
    }
  });
});

const updateStatus = (id, status) => {
  const appointmentRef = dbRef(db, `agendamentos/${id}`); 
  update(appointmentRef, { status });
};

const deleteAppointment = (id) => {
  const appointmentRef = dbRef(db, `agendamentos/${id}`); 
  remove(appointmentRef);
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const getStatusClass = (status) => {
  switch (status) {
    case 'AGENDADO':
      return 'status-agendado';
    case 'ACEITO':
      return 'status-aceito';
    case 'EM ANDAMENTO':
      return 'status-andamento';
    case 'CANCELADO':
      return 'status-cancelado';
    case 'FINALIZADO':
      return 'status-finalizado';
    default:
      return '';
  }
};

const goToHomePage = () => {
  router.push('/');
};
</script>

<style scoped>
.admin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}

.form {
  display: flex;
  flex-direction: column;
  background-color: #CFCFCF;
  width: 90%;
  height: 80%;
  padding: 1rem 2rem;
  border-radius: 10px;
  position: relative;
}

.form-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  padding-bottom: 1rem;
}

.form-body {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
}

.form-row span,
.form-header span {
  width: 12%;
  text-align: center;
}

.delete-icon {
  cursor: pointer;
  color: red;
}

.status-agendado {
  color: blue; 
}

.status-aceito {
  color: green;
}

.status-andamento {
  color: purple; 
}

.status-cancelado {
  color: red; 
}

.status-finalizado {
  color: orange; 
}

select {
  width: 100%;
  text-align: center;
  padding: 0.25rem;
  border: none;
  border-radius: 4px;
}

select.status-agendado {
  color: blue;
}

select.status-aceito {
  color: green;
}

select.status-andamento {
  color: purple;
}

select.status-cancelado {
  color: red;
}

select.status-finalizado {
  color: orange;
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
  position: absolute; /* Changed to absolute positioning */
  bottom: 20px; /* Adjust as needed for spacing */
  right: 20px; /* Adjust as needed for spacing */
}
</style>

