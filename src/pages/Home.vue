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
        <hr><h3>Mais vendidos</h3>
        
      <div class="cads">
        <!-- <Card/>
        <Card/>
        <Card/> -->
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


</style>
