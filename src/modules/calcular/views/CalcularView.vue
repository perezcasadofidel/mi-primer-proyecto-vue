<template>
    <h3>Propiedades Computadas</h3>
    <input type="number" v-model="valor">
    {{ valorCalculado }}
    <!-- <ResultadoSection v-show="mostrarElemento" :resultado="valorCalculado"></ResultadoSection> ESTO HACE QUE PONGA DISPLAY NONE PERO SIGUE ESTANDO EN EL DOM -->
    <ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <!-- <div v-else-if="isNan(valor)">Este valor no es un numero</div> SE PUEDE USAR TAMBIEN V-ELSE-IF-->
     <div v-else>Elemento no mostrado</div><!--TIENE QUE ESTAR JUSTO DEBAJO DE UN V-IF -->
</template>
<script setup lang="ts">
    import { ref,computed } from 'vue';
    import ResultadoSection from '../components/ResultadoSection.vue';

    const valorCalculado =  computed(()=>{
        return valor.value * 3;
    })

    const mostrarElemento =  computed(()=>{
        return valor.value > 10;
    })

    const valor = ref(0);
</script>
<style scoped></style>    