import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";


describe('pruebas eb 09-promesas', () => { 
    test('La funcion debe retornar el heroe correcto segun su Id', (done) => { 
       
        getHeroeByIdAsync(1)
            .then( hero => {

                expect( hero ).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    },
                    )
                    
                done()
            })          
     })

     test('Esta promera debe retornar un error si el id no existe', (done) => { 

        const id = 100;
        getHeroeByIdAsync(id).catch( 
            err => {
                expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
                done()
            }
         )
      })
 })