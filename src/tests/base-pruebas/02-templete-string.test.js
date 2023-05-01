import { getSaludo } from "../../base-pruebas/02-template-string";

describe('test de prueba del templete string', () => { 
    test('La funcion debe de retornar hola Adrian', () => { 

        const nombre = "Adrian";
        const menssage = getSaludo( nombre );

        expect(menssage).toBe(`Hola ${nombre}`);

     })
 })