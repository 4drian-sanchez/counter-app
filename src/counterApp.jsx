//Importacion del Hook useState 
import {useState} from 'react'
import PropTypes from 'prop-types';



export const CounterApp = ({value = 0}) => {

    /* desestructuracion del Hook */
    const [ counter, SetCounter ] = useState( value );

    //funcion de suma o contador de clicks
    const handleApp = () =>  SetCounter( counter + 1);
    const restarApp = () => SetCounter( (value) => {
        if( value === 0) return counter;
        return value - 1;
    });
    const reset = () => SetCounter( counter - counter);
   

   return <>
    <h1>CounterApp</h1>
    <p className='number'>{counter}</p>
    <button onClick={handleApp}> +1</button>
    <button  onClick={restarApp}>-1</button>
    <button onClick={reset}>Reset</button>
     </>
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

