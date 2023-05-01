import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas del archuvo 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por su id', () => { 
        const id = 1;
        const heroe = getHeroeById( id );
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })

    test('getHeroeById debe retornar undefined si no existe el heroe', () => { 
        const id = 100;
        const heroe = getHeroeById( id );
        expect(heroe).toBeFalsy();
     })

     //Tarea 
    //Debe de retornar un arreglo con los heroes de DC
    // debe de devolver 3 elementos

    //Debe de retornar un arreglo con los heroes de marvel
    //retorna 2 elementos

     test('Debe de retornar un arreglo con los heroes de DC', () => { 
        const heroes = getHeroesByOwner('DC');
        expect(heroes).toEqual(   [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
      })

     test('Debe de retornar un arreglo con los heroes de DC', () => { 
        const heroes = getHeroesByOwner('Marvel');
        expect(heroes).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        )
      })

 })