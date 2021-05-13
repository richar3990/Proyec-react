import React, {Component} from 'react';
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
    render() {
        return (
            <div className="formulario">
                <Slider
                    title="formulario"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">

                    </div>
                    <Sidebar
                        blog = "false"

                    />

                </div>
            </div>

        );
    }
}

export default Formulario;
