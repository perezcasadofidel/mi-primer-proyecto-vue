<template>
    <h3>Propiedades Computadas</h3>
    <input type="number" v-model="valor">
    {{ valorCalculado }}
    <ResultadoSection :resultado="valorCalculado"></ResultadoSection>
</template>
<script setup lang="ts">
    import { ref,computed } from 'vue';
    import ResultadoSection from '../components/ResultadoSection.vue';

    const valorCalculado =  computed(()=>{
        return valor.value * 3
    })

    const valor = ref(0);
</script>
<style scoped></style>    