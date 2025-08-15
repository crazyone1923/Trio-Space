import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="#">
        Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/AI" onClick={() => setMobileToggle(false)}>
              AI
              </Link>
            </li>
            <li>
              <Link to="/Hardware" onClick={() => setMobileToggle(false)}>
              Hardware
              </Link>
            </li>  
            <li>
              <Link to="/Software" onClick={() => setMobileToggle(false)}>
              Software
              </Link>
            </li>                      
          </ul>
        </DropDown>

      </li>      
     
      <li className="menu-item-has-children">
        <Link to="/Portfolios" onClick={() => setMobileToggle(false)}>
        Portfolios  
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/Aboutus" onClick={() => setMobileToggle(false)}>
        About us  
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/Contactus" onClick={() => setMobileToggle(false)}>
        Contact us  
        </Link>
      </li>
    </ul>
  );
}
