<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    width: {
        type: String,
        default: '50%'
    },
    height: {
        type: String,
        default: 'auto'
    }
});
</script>

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

<style scoped>
.card {
    width: 17rem;
    height: 25rem;
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
    font-size: 2rem;
}

.card .inf .marca {
    font-size: 2.5rem;
    font-weight: bold;
}

.card .inf .preco {
    font-size: 3rem;
}
</style>
