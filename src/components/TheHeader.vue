<template>
    <div class="header">
        <h3>La temperatura actual es: </h3> <TheWeather></TheWeather>
    </div>
</template>
<script setup lang="ts">
    import TheWeather from './TheWeather.vue';
</script>
<style scoped>
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: #333;
        color: white;
    }
    h3 {
        margin: 0;
        margin-right: 10px;
    }
</style>