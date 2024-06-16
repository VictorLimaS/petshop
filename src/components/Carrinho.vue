<template>
    <div class="carrinho" :class="{ 'visible': visible }">
        <ion-icon name="close-circle-outline" @click="closePanel()"></ion-icon>
        <h2>CARRINHO</h2>
        <hr>
        <div class="itens">
            ITENS
        </div>
        <hr>
        <div class="total"><h3>TOTAL: <span>199,99</span></h3></div>
        <button>FINALIZAR</button>
    </div>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    },
});

const emit = defineEmits(['update:visible']);

const closePanel = () => {
    emit('update:visible', false);
};
</script>

<style scoped>

ion-icon  {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
}

.carrinho {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    width: 400px;
    background-color: rgb(255, 255, 255);
    z-index: 1; 
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    padding: 20px;
    overflow-y: auto;
    border: 1px solid black;
    border-right: none;
}

.carrinho.visible {
    transform: translateX(0);
}

.fa-solid {
    font-size: 5rem;
    z-index: 1000;
}

h2 {
    margin: 1.5rem 0;
}

hr {
    width: 80%;
    height: 5px;
    background-color: black;
    border: none;
    border-radius: 5px;
}

.itens {
    padding: 1rem 0;
}

.total {
    display: flex;
    width: 100%;
    justify-content: end;
    margin: 1rem 0 2rem 0;
}

button {
    padding: .4rem 4rem;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 5px;
    background-color: transparent;
    border: 2px solid rgb(50, 199, 50);
    cursor: pointer;
}

</style>
