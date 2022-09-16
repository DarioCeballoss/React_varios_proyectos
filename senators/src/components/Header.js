import { NavLink } from "react-router-dom";


function Header() {


	return (
		<nav>
			<ul>
				<li><NavLink to={`/`}> Home </NavLink> </li>
				<li><NavLink to={`/house`}> About </NavLink> </li>
				<li> Shop
					<ul>
						<li><NavLink to={`/house/attendancce`}> Online </NavLink> </li>
						<li><NavLink to={`/house/partyloyalty`}> Offline </NavLink> </li>
					</ul>
				</li>
				<li><NavLink to={`/senate`}> Contact </NavLink> </li>
			</ul>
		</nav>
	);
}

export default Header;
