import { Link } from "react-router-dom";
import './Header.css';
import LogoTgif from './img/LOGOTGIF.jpg'


function Header() {

	return (
		<header >
			<div className="header-img">

				<a href="https://www.whitehouse.gov/the_press_office/TransparencyandOpenGovernment">
					<img src={LogoTgif} alt="TGIFlogo" className="logo" />
				</a>

				<a href="mailto:info@tgif.net?Subject=Hello%20again" target="_top">info@tgif.net</a>

			</div>

			<nav className="sticky-top row  col navbar navbar-expand-sm bg-light navbar-light ">
				<div>

					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to='/' className="nav-link" ><b>Home</b></Link>
						</li>

						<li className="nav-item dropdown">
							<button className="dropbtn nav-link dropdown-toggle bg-light border-0" >
								<b>Congress 113</b>
							</button>
							<ul className="dropdown-menu dropdown-content">
								<li><Link to='/senate' className="dropdown-item"><b>Senate</b></Link></li>
								<li><Link to='/house' className="dropdown-item"><b>House</b></Link></li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<button className="dropbtn nav-link dropdown-toggle bg-light border-0" >
								<b>Attendance</b>
							</button>
							<ul className="dropdown-menu dropdown-content">
								<li><Link to='/senate/attendancce' className="dropdown-item"><b>Senate</b></Link></li>
								<li><Link to='/house/attendancce' className="dropdown-item"><b>House</b></Link></li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<button className="dropbtn nav-link dropdown-toggle bg-light border-0" >
								<b>Party Loyalty</b>
							</button>
							<ul className="dropdown-menu dropdown-content">
								<li><Link to='/senate/partyloyalty' className="dropdown-item"><b>Senate</b></Link></li>
								<li><Link to='/house/partyloyalty' className="dropdown-item"><b>House</b></Link></li>
							</ul>
						</li>
					</ul>
					
				</div>
			</nav>
		</header>
	);
}

export default Header;
