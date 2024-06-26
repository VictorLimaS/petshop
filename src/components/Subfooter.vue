<template>
    <div class="subfooter">
        <div class="logo">
            <Logo/>
            <p>© 2024. Todos os direitos reservados – Animal Pet ®. Desenvolvido por Victor Lima.</p>
        </div>
    </div>
</template>

<script setup>
    import Logo from './Logo.vue'
</script>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5px 20px;
}

.logo p {
    margin-left: 50px;
}
</style>
