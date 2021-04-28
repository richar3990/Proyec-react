import React from 'react';
class MiComponente extends React.Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso','Jamon'],
            calorias: 400
        }
        return (
            <div className="mi-componente">
                <h1>{'Receta: '+ receta.nombre}</h1>
                <h1>{'Calorias: '+ receta.calorias}</h1>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i ) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                    })
                    }
                </ol>
                <h1>Hola soy el componente MiComponente</h1>
            </div>
        );
    }
}
export default MiComponente;
