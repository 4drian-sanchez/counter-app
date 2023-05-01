import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas del archivo 07-deses-arr', () => { 
    test('La funcion debe retornar un array', () => { 
        const [letters, numbers] = retornaArreglo();

        expect(typeof letters ).toBe('string');
        expect( letters ).toBe('ABC');
        expect(typeof numbers ).toBe('number');
        
        expect(letters).toEqual( expect.any(String));
     })
 })