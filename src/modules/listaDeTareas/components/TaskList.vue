<template>
    <div>
        <h2>Lista de TAreas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{tarea}}
                <button @click="deleteTarea(index)">Eliminar Tarea</button>
            </li>
        </ul>
        <button @click="deleteTodo">Eliminar</button>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    const tareas = ref<string[]>([]);
    const nuevaTarea = ref('');

    const addTarea = () =>{
        tareas.value.push(nuevaTarea.value)
        nuevaTarea.value = '';
    }
    const deleteTodo = () => {
        tareas.value = [];
    }
    const deleteTarea = (index: number) => {
        tareas.value.splice(index, 1);
    }
</script>
<style>
</style>