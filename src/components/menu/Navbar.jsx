import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      {/* <Link to="/" className={location.pathname === '/contact' ? 'active' : ''}> */}
            <h1>GVS</h1>
          {/* </Link> */}
      <ul className="nav-links">
        <li>
          <h4>Serbian</h4>
        </li>
        <li>
          <h4>English</h4>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
