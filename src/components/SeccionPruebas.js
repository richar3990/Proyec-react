import React, {Component} from 'react';
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
    contador = 0;

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        return (

            <section id="content">
                <h2 className="subheader">Ultimos Articulos</h2>
                <section className="componentes">
                    <MiComponente/>
                </section>
                <h2 className="subheader">Set States</h2>
                <section className="componentes">
                    <p>
                        Contado: {this.state.contador}
                    </p>
                    <p>
                        <input type="button" value="Sumar" onClick={this.sumar}/>
                        <input type="button" value="Restar" onClick={this.restar}/>
                    </p>

                </section>
            </section>
        );
    }
}


export default SeccionPruebas;
