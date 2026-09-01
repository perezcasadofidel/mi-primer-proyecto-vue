import axios from 'axios'

//tengo que cambiar esto a la actual y en cuba havana
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=auto'

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m[0];
    return nuevaTemperatura;
}