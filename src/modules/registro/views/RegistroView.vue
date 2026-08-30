<template>
    <div class="formulario">
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <Label for="nombre">Nombre:</Label>
            <Field name="nombre" type="text" placeholder="ingrese su nombre" id="nombre"/>
            <ErrorMessage name="nombre"></ErrorMessage>
            <Label for="email">Correo:</Label>
            <Field name="email" type="email" placeholder="ingrese su email" id="email" />
            <ErrorMessage name="email"></ErrorMessage>
            <button type="submit">Registrar</button>
        </Form>
        
    </div>
</template>
<script setup lang="ts">
    import { Form,Field,ErrorMessage } from "vee-validate";
    import {schema} from '../schemas/validationSchema'

    const onSubmit = () =>{
        alert('Se ha enviado el formulario')
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