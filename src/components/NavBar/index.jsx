import CardWidget from "../CardWidget";
import "./navbar.css";


function NavBar() {
    return (
             <div className="navbar">
                <ul>

                 <li>
                    <button>Inicio</button>
                 </li>
                 <li>
                    <button>Quienes somos</button>
                 </li>

                 <li>
                    <button>Contacto</button>
                 </li>


                </ul>
             <CardWidget />
             </div>

    );
}

export default NavBar;