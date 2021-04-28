// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//componentes
// import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";

function App() {
    var buttonString = "Ver menos";

    return (
        <div className="App">
            <Header/>
            <Slider
                title="Bienvenido al Curso de React"
                btn = {buttonString}
            />
            <div className="center">

                <Peliculas/>

                <Sidebar/>
            </div>
            <div className="clearfix"></div>
            <Footer/>
        </div>
    );
}

export default App;
