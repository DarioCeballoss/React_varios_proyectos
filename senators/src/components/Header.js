import { NavLink } from "react-router-dom";


function Header() {


  return (
      			<nav>
				<ul>
				  <li><NavLink to={`/`}> Home </NavLink> </li>
				  <li><NavLink to={`/About`}> About </NavLink> </li>
				  <li> Shop 
					  <ul>
						  <li><NavLink to={`/Online`}> Online </NavLink> </li>
						  <li><NavLink to={`/Offline`}> Offline </NavLink> </li>
					  </ul>
				  </li>
				  <li><NavLink to={`/Contact`}> Contact </NavLink> </li>
                </ul>
          </nav>
  );
}

export default Header;
