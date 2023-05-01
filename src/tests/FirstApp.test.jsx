/** @jest-environment jsdom */

import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en <FirstApp/>', () => { 
/*     test('Debe de hacer match en el snapshot', () => { 
        const title = 'hola soy Goku';
        const subTitle = 'hola soy Adrian';

        //container hace referencia al DOM
        const {container} = render( <FirstApp title={title} subTitle={subTitle}/> )
        
        //Con esta linea de codigo creamos el snapshot
        expect( container ).toMatchSnapshot();
     }) */

     test('El title debe estar en un h1', () => { 
        const title = 'hola soy Goku';
        const subTitle = 'hola soy Adrian';
        const {container, getByTestId} = render( <FirstApp title={title} subTitle={subTitle}/> )
        expect( container ).toMatchSnapshot();

        expect(getByTestId('test-title').innerHTML).toContain(title)
 
      })
 })