<template>
  <h1>Hello Lola</h1>
  <p class="good">{{contador}}</p>
  <button @click="incrementar">Incrementar</button>
  <button @click="reducir">Reducir</button>
  <p class="bad">{{respuesta}}</p>

</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const contador = ref(0);
  const respuesta = ref('');
  const incrementar = () =>{
    respuesta.value='';
    contador.value++;
  }
  const reducir = () =>{
    respuesta.value='';
    if(contador.value==0 || contador.value<0){
      respuesta.value = 'no puedes bajar de 0'
    }else{
      contador.value--;
    }   
  }
</script>

<style scoped>
  .good{
    color: green;
  }
  .bad{
    color: red;
  }
</style>
