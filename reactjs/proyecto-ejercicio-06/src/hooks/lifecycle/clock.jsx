import React, { useEffect, useState } from 'react';

const Clock = () => {

    const estado = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [state, setState] = useState(estado);

    useEffect(() => {
        console.log('Componente creado');
        const timerID = setInterval ( () => {
            tick()
            console.log('Actualización del componente');
        }, 1000 );

        return () => {
            clearInterval (timerID);
        }
    }, []);

    const tick = () => {
        setState((prevState) => {
            let edad = prevState.edad +1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }

    return (
        <div>
            <h2>
            Hora Actual:
            {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );

}

export default Clock;
