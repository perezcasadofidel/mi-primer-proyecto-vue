<template>
    <div class="formulario">
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <Label for="nombre">Nombre:</Label>
            <Field v-model="nombre" name="nombre" type="text" placeholder="ingrese su nombre" id="nombre"/>
            <ErrorMessage name="nombre"></ErrorMessage>
            <Label for="email">Correo:</Label>
            <Field v-model="email" name="email" type="email" placeholder="ingrese su email" id="email" />
            <ErrorMessage name="email"></ErrorMessage>
            <button type="submit">Registrar</button>
        </Form>
        
    </div>
</template>
<script setup lang="ts">
    import { Form,Field,ErrorMessage } from "vee-validate";
    import {schema} from '../schemas/validationSchema'
    import { useRegistrarStore } from "../stores/registrarStore";
    import { ref } from "vue";

    const registrarStore = useRegistrarStore();

    const nombre = ref('');
    const email = ref('');

    const onSubmit = () =>{
        registrarStore.guardarRegistro(nombre.value, email.value);
        alert('Registro guardado correctamente');
    }
</script>
<style scoped>
 .formulario{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
 .formulario > form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
 }
</style>