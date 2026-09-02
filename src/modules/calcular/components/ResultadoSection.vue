<template>
    <div class="resultado">{{ props.resultado }}</div>
</template>
<script setup lang="ts">
    const props = defineProps(
        [
            'resultado'
        ]
        );
</script>
<style scoped>
    .resultado{
        background-color: aquamarine;
    }
</style>