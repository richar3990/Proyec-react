import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Error from "./components/Error";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>

                <div className="center">

                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/formulario" component={Formulario}/>
                        <Route exact path="/peliculas" component={Peliculas}/>


                        <Route exact path="/mi-componente" component={MiComponente}/>
                        <Route exact path="/pruebas/:id" render={(props) => {
                            var id = props.match.params.id;
                            return (
                                <div id="content">
                                    <h1 className="subheader">Pagina de Prueba</h1>
                                    <h1>{id}</h1>
                                </div>
                            );
                        }
                        }/>
                        <Route component={Error}/>

                    </Switch>
                    <div className="clearfix"></div>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;
