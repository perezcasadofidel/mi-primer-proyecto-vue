import { defineStore } from "pinia";
import { ref } from "vue";

export const useWeatherStore = defineStore('weather',()=>{
    const temperatura = ref('Cargando...');
    const setTemperatura = (temp:string) =>{
        temperatura.value = temp;
    }
    return {temperatura,setTemperatura}
})