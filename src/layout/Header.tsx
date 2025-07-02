import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <NavLink className="navbar-brand" to="/">Rick & Morty SPA</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/list">Lista</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/contact">Contacto</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
