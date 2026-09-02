import axios from 'axios'

//tengo que cambiar esto a la actual y en cuba havana
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=23.133&longitude=-82.383&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m;
    return nuevaTemperatura;
}