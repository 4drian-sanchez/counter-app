import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas del archivo 11-async-await', () => { 

    test('Debe de retornar la url de la imagen', async () =>  { 
        const url = await getImagen();
        console.log(url);
     }) 
 })