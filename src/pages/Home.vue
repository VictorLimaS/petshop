<script setup>
import Card from '../components/Card.vue'


</script>

<template>
  <div class="home">
    <div class="principal">
      <div class="img img1">
        <img src="../assets/3.png" alt="imagem">
      </div>
      <div class="img img2">
        <img src="../assets/2.png" alt="imagem">
      </div>
      <div class="img img3">
        <img src="../assets/1.png" alt="imagem">
      </div>
    </div>

    <div class="vendidos">
      <h3>
        <hr>Mais vendidos
      </h3>

      <div class="cads">
        <Card width="30%" height="auto" />
        <Card width="30%" height="auto" />
        <Card width="30%" height="auto" />
        <Card width="30%" height="auto" />
      </div>
    </div>
  </div>

</template>

<style scoped>
.principal {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.principal .img {
  width: 32%;
  max-height: 80%;
  margin: 3rem 0;
}

.principal .img img {
  width: 100%;
  border-radius: 10px;
}

.vendidos {
  background-color: white;
  padding: 4.2rem 3rem;
}

.vendidos h3 {
  display: flex;
  align-items: center;
  font-size: 5rem;
  gap: 2rem;
}

.vendidos h3 hr {
  width: 10%;
  height: .5rem;
  background-color: black;
  border: none;
  border-radius: 5px;
}

.vendidos .cads {
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  gap: 2rem;
}
</style>
