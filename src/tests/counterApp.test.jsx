import { render, screen } from "@testing-library/react"
import CounterApp from "../counterApp"
//Tarea: 
/**
 * Debe de hacer match en el snapshot
 * Debe de mostrar el valor inicial de 100
 */

describe('Pruebas en el comp <CounterApp/>', () => { 

    const value = 100;
    
    test('Debe de hacer match en el snapshot', () => { 
        const {container} = render( <CounterApp value={value}/>)
        expect( container ).toMatchSnapshot();
     })
    
    test('Debe de mostrar el valor inicial de 100', () => { 
        render( <CounterApp value={value}/>)
        expect( screen.getByText(0) ).toBeTruthy();
     })
 })