# Hook UseState y proptypes:

Este es un pequeño proyecto del curso React: De cero a experto ( Hooks y MERN ) donde aprendi a usar el hook useState() y 

## useState: 
** **

El hook [UseState](https://es.react.dev/reference/react/useState) nos permite terner en memomria el estado de la aplicacion actual cuando la pantalla cambie y vuelva se vuelva a renderizar nuestro componente. Para usarlo debemos importar el hook de **react**.

    import { useState } from 'react';

Luego debemos almacenar el hook en una constante y luego desestructurar de la siguiente manera: 

    const [index, setIndex] = useState(0);

index es una variable de estado y setIndex es la función que setea el estado.

Cuando llamamos al useState, le estamos diciendo a React que debe recordar algo



## PropTypes: 
** **
en vite debemos instalar la dependencia para poder usar los PropTypes

    npm i prop-types

Los PropTypes se usan para definir el tipo de dato a las propiedades y asegurarnos de que sean requeriadas para que la aplicacion funcione correctamente

Luego importamos la dependencia en el archivo del componente:

    import PropTypes from 'prop-types;

Para hacer la validacion de los datos de las propiedades hacermos lo siguiente:

    NombreComp.propTypes =   {
        title: PropTypes.string
    }