import React, {Component} from 'react';
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Peliculas extends Component {
    state = {
        peliculas: [
            {
                titulo: 'Batman vs Superman',
                image: 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/las-20-exclamaciones-mas-disparatadas-de-robin-en-la-serie-de-batman-del-66-2.png'
            },
            {titulo: 'Hulk', image: 'https://www.guioteca.com/los-80/files/2017/08/Lou-Ferrigno-Masa.jpg'},
            {
                titulo: 'Mujer Maravilla',
                image: 'https://cdn.cienradios.com/wp-content/uploads/sites/24/2017/03/maravilla1.jpg'
            }
        ],
        nombre: 'Richar Meza',
        favorita: ''
    }
    cambiarTitulo = () => {
        var {peliculas} = this.state;
        peliculas[0].titulo = "Bartman Viejo";
        this.setState({
            peliculas: peliculas
        });
    }
    favorita = (pelicula) => {
        console.log('Favorita marcada');
        this.setState({
            favorita: pelicula
        })
    }

    render() {
        return (
            <div className="peliculas">
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <h2 className="subheader">Listado de peliculas</h2>
                        <p>Seleccion de peliculas de {this.state.nombre}</p>
                        <p>
                            <button onClick={this.cambiarTitulo}>Cambiar titulo de bataman</button>
                        </p>
                        {this.state.favorita.titulo ? (
                            <strong>La pelicula favorita es {this.state.favorita.titulo}</strong>
                        ) : (
                            <strong>No hay pelicula favorita marcada</strong>
                        )
                        }
                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            marcarFavorita={this.favorita}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Sidebar
                        blog="false"/>
                </div>
            </div>

        );
    }
}

export default Peliculas;
