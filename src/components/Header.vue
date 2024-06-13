<script setup>
import Logo from './Logo.vue'
</script>

<template>
  <div class="top">
    <p><ion-icon name="rocket-outline"></ion-icon>Frete grátis a partir de R$49</p>
  </div>
  <header class="header">
      <div class="logo">
        <Logo/>
      </div>
    <nav class="menu">
      <ul>
        <li><a href="#">Novidades</a></li>
        <li><a href="#">Cachorros</a></li>
        <li><a href="#">Gatos</a></li>
        <li><a href="#">Passaros</a></li>
        <li><a href="#">Roedores</a></li>
        <li><a href="#"><ion-icon name="calendar-outline"></ion-icon>Agendar</a></li>
      </ul>
    </nav>
    <div class="icons">
      <ion-icon name="person-outline"></ion-icon>
      <ion-icon name="cart-outline"></ion-icon>
    </div>
  </header>
</template>

<style scoped>
.top {
    display: flex;
    justify-content: center;
    padding: 2px 0;
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
}

.header .icons {
  display: flex;
  gap: 10px;
}

.logo img {
  max-width: 100px; 
}

.menu ul {
  list-style-type: none;
  display: flex;
  gap: 50px;
}
  
.menu li a{
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
