import React, {Component} from 'react';
import Pelicula from "./Pelicula";

class Peliculas extends Component{
    state = {
      peliculas: [
          {titulo: 'Batman vs Superman', image: 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/las-20-exclamaciones-mas-disparatadas-de-robin-en-la-serie-de-batman-del-66-2.png'},
          {titulo: 'Hulk', image: 'https://www.guioteca.com/los-80/files/2017/08/Lou-Ferrigno-Masa.jpg'},
          {titulo: 'Mujer Maravilla', image: 'https://cdn.cienradios.com/wp-content/uploads/sites/24/2017/03/maravilla1.jpg'}
      ],
        nombre: 'Richar Meza'
    }
    render() {
        return(
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de peliculas de {this.state.nombre}</p>
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i)=>{
                            return(
                                <Pelicula key={i} pelicula={pelicula}/>
                            )
                        })
                    }
                </div>
            </div>

        );
    }
}
export default Peliculas;
