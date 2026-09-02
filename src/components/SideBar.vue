<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Correo: {{ registrarStore.email }}</h3>
        <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
            <li><router-link to="/registro">Registro</router-link></li>
            <li><router-link to="/calcular">Calculadora</router-link></li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { useRegistrarStore } from "@/modules/registro/stores/registrarStore";
    // import {ref,watch} from "vue";

    const registrarStore = useRegistrarStore();
    //-----EJEMPLO DE COMO SE USA EL WATCH----
    // const nombre = ref(registrarStore.nombre);
    // const email = ref(registrarStore.email);
    // watch(() => registrarStore.nombre, (newNombre) => {
    //     nombre.value = newNombre;
    // });
    // watch(() => registrarStore.email, (newEmail) => {
    //     email.value = newEmail;
    // });
</script>
<style scoped>
    .sidebar{
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>