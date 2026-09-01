<template>
    <TheHeader :mensaje="texto"></TheHeader>
    <div class="container">
        <SideBar></SideBar>
        <div class="content">
            <input type="text" v-model="texto">
            {{texto}}
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
    import SideBar from '@/components/SideBar.vue';
    import TheHeader from '@/components/TheHeader.vue';
    import {ref} from 'vue';

    const texto = ref('');

</script>
<style scoped>
    .container{
        display: flex;
    }
    .content{
        flex: 1;
        padding: 20px;
        margin-top:30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>