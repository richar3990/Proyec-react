import React, {Component} from 'react';
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Slider
                    title="Bienvenido al Curso de React"
                    btn="Ir a Blog"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos Articulos</h1>
                    </div>
                    <Sidebar/>

                </div>
            </div>

        );
    }
}

export default Home;
