<template>
    <h3>La temperatura actual es: {{weatherStore.temperatura}}</h3>
</template>
<script setup lang="ts">
    import { useWeather } from '@/composables/useWeather';
    import { onMounted } from 'vue';
    import { useWeatherStore } from '@/stores/weatherStore';

    const weatherStore = useWeatherStore();

    onMounted(()=>{
        useWeather();
    })
</script>
<style scoped></style>