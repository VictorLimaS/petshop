<template>
  <div class="footer">
    <div>
      <h3>Precisa de ajuda?</h3>
      <ul>
        <li>Trocas e devoluções</li>
        <li>Garantias</li>
        <li>Entregas</li>
      </ul>
    </div>

    <div>
      <h3>Sobre</h3>
      <ul>
        <li>Trabalhe com a gente</li>
        <li>Quem somos</li>
      </ul>
    </div>

    <div>
      <h3>Produtos</h3>
      <ul>
        <li>Cachorros</li>
        <li>Gatos</li>
        <li>Passaros</li>
        <li>Roedores</li>
      </ul>
    </div>

    <div class="social">
      <h3>Siga a gente</h3>
      <ul>
        <li><ion-icon name="logo-instagram"></ion-icon></li>
        <li><ion-icon name="logo-facebook"></ion-icon></li>
        <li><ion-icon name="logo-twitter"></ion-icon></li>
      </ul>
    </div>

    <div class="pay">
      <h3>Formas de pagamento</h3>
      <img src="../assets/pagamento.png" alt="Formas de pagamento">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 30px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.footer h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer ul {
  list-style-type: none;
  padding: 0;
}

.footer li {
  margin-bottom: 5px;
  cursor: pointer;
}

.footer .social-icons {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

.footer .social-icons i {
  font-size: 24px;
  color: #333;
}

.footer .social {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer .social ul {
  display: flex;
  gap: 10px;
  font-size: 25px;
  cursor: pointer;
}

.footer .pay {
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
}

.footer .pay img {
  width: 100%;
}
</style>