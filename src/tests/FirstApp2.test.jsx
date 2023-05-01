/** @jest-environment jsdom */

import { getByRole, render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en <FirstApp/>', () => { 
   const title = 'Hola soy goku'
   const  subTitle  = 'soy un subttitulo'

   test('Debe de hacer match en el snapshot', () => { 
      const { container  } = render( <FirstApp title={title} subTitle={subTitle}/> )
      expect( container ).toMatchSnapshot();
    })

   test('Debe de mostrar en mensaje, hola soy Goku', () => { 
      const { container  } = render( <FirstApp title={title} subTitle={subTitle}/> )
      expect( screen.getByText(title)).toBeTruthy();
    })

   test('Debe de mostrar el titulo en un h1', () => { 
      const { container  } = render( <FirstApp title={title} subTitle={subTitle}/> )
      expect( screen.getByRole( "heading", {level: 1}).textContent ).toContain(title);
    })
 })