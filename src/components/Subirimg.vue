<template>
  <div>
    <h2>Upload de Produto</h2>
    <input type="file" @change="handleFileUpload">
    <br><br>
    <label>Nome do Produto:</label>
    <input type="text" v-model="nome">
    <br><br>
    <label>Preço:</label>
    <input type="number" v-model.number="preco">
    <br><br>
    <label>Descrição:</label>
    <textarea v-model="descricao"></textarea>
    <br><br>
    <button @click="uploadProduto">Salvar Produto</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storage, firestore } from '../firebase/firebase';

const file = ref(null);
const nome = ref('');
const preco = ref(0);
const descricao = ref('');
let imageURL = '';

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
};

const uploadProduto = async () => {
  try {
    if (!file.value) {
      alert('Por favor, selecione um arquivo para fazer upload.');
      return;
    }

    const storageRef = storage.ref();
    const fileRef = storageRef.child('imagens/' + file.value.name);

    const snapshot = await fileRef.put(file.value);

    imageURL = await snapshot.ref.getDownloadURL();

    const produtosRef = firestore.collection('produtos');
    await produtosRef.add({
      nome: nome.value,
      preco: preco.value,
      descricao: descricao.value,
      imageURL: imageURL
    });

    alert('Produto salvo com sucesso!');
    
    nome.value = '';
    preco.value = 0;
    descricao.value = '';
    imageURL = '';

  } catch (error) {
    console.error('Erro ao salvar produto:', error);
    alert('Erro ao salvar produto. Verifique o console para mais detalhes.');
  }
};
</script>

<style scoped>

</style>