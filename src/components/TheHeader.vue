<template>
    <div class="header">
        {{mensajeRecibido}}<TheWeather></TheWeather>
    </div>
</template>
<script setup lang="ts">
    import TheWeather from './TheWeather.vue';
    import { ref, watch } from 'vue';

    const props = defineProps(['mensaje']);
    const mensajeRecibido = ref(props.mensaje);
    watch(()=>props.mensaje,(newValue)=>{
        mensajeRecibido.value=newValue;
    })

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