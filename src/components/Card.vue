<template>
    <div class="card" :style="{ width: props.width, height: props.height }">
        <div class="img">
            <img src="../assets/roupa.png" alt="imagem">
        </div>
        <div class="inf">
            <p class="descricao">Roupa para gatos Dino</p>
            <p class="marca">FRENDILY</p>
            <p class="preco">109,99</p>
            <p class="parcela">(até 3x s/ juros)</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    width: {
        type: String,
        default: '30%'
    },
    height: {
        type: String,
        default: 'auto'
    }
});
</script>

<style scoped>
.card {
    background-color: #CFCFCF;
    border-radius: 10px;
    padding: 2rem;
    cursor: pointer;
}

.card img {
    width: 100%;
    object-fit: cover;
}

.card .inf {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    font-size: 1.5rem;
}

.card .inf .descricao {
    font-size: 1.4rem;
}

.card .inf .marca {
    font-size: 1rem;
    font-weight: bold;
}

.card .inf .preco {
    font-size: 1.7rem;
}
</style>
