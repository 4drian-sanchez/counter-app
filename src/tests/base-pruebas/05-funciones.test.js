import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Las funciones deben retornar un objeto', () => { 
   test('La funcion debe retornar un objeto', () => { 
        const obj = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    };

    const fn = getUser();

    expect(obj).toEqual(fn);
    })
    
    test('Esta funcion debe retornar un objeto con el name de Adrian', () => { 
        const name = 'Adrian';
        const menssage = {
            uid: 'ABC567',
            username: name
        }

        const fn = getUsuarioActivo( name );

        expect( menssage ).toEqual( fn );
     })
 })