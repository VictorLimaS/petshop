<script setup>
    import Logo from './Logo.vue'
</script>

<template>
    <div class="subfooter">
        <div class="logo">
            <Logo/>
            <p>© 2024. Todos os direitos reservados – Animal Pet ®. Desenvolvido por Victor Lima.</p>
        </div>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px 20px;
}

.logo p {
    margin-left: 50px;
}
</style>
