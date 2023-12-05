import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
        <header>
            
            <div className="Navbar">
                <img src="icon.png" alt="Icon"></img>
                <i><Link className="nav-link" to="/"><b>TheBigScreen</b></Link></i>
                <Link to="/movie">MOVIES</Link>
                <Link to="/reserve">RESERVE</Link>
                <Link to="/seats">SEATS</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/about">ABOUT</Link>
                
            </div>
           
        </header>

     );
}
 
export default Navbar;