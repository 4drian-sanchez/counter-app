
describe('Pruebas del componene <demoComponent/>', () => {
    test('Esta prueba no debe fallar', () => {
    
        //Inicializacion
        const menssage = 'hola mundo';
    
        //estimulos
        const menssage2 = menssage.trim();
    
        //Observacion
        expect( menssage ).toBe( menssage2 );
    })
})



