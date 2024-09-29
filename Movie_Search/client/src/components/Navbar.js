import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <ul className="nav nav-pills bg-black justify-content-center p-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <NavLink to="/" className="nav-link  font-Lato" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item" role="presentation">
                <NavLink to="/Movies" className="nav-link  font-Lato" activeClassName="active">Movies</NavLink>
            </li>
            <li className="nav-item" role="presentation">
                <NavLink to="/Admin" className="nav-link font-Lato" activeClassName="active">Admin</NavLink>
            </li>
        </ul>
    )
}

export default Navbar