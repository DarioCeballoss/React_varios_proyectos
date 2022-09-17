import { Link } from "react-router-dom";
import './Header.css';
import LogoTgif from './img/LOGOTGIF.jpg'


function Header() {

	return (
		<header >
			<div className="clearfix">
				<div className="float-left">
					<Link to="https://www.whitehouse.gov/the_press_office/TransparencyandOpenGovernment"><img src={LogoTgif}
						alt="TGIFlogo" className="logo" /> </Link>
				</div>
				<div className="float-right">
					<Link href="mailto:info@tgif.net?Subject=Hello%20again" target="_top">info@tgif.net</Link>
				</div>
			</div>
			<nav className="sticky-top row  col navbar navbar-expand-sm bg-light navbar-light ">
				<div>

					<ul className="navbar-nav">
						<li className="nav-item"><Link to='/' className="nav-link" ><b>Home</b></Link></li>

						<li className="nav-item"><Link to='/senate' className="nav-link"><b>Senate</b></Link></li>
						<li className="nav-item"><Link to='/house' className="nav-link"><b>House</b></Link></li>

						<li className="nav-item"><Link to='/house/attendancce' className="nav-link"><b> Attendance House</b></Link></li>
						<li className="nav-item"><Link to='/senate/attendancce' className="nav-link"><b>Attendance Senate</b></Link></li>


						<li className="nav-item"><Link to='/house/partyloyalty' className="nav-link"><b>Party Loyalty House</b></Link></li>
						<li className="nav-item"><Link to='/senate/partyloyalty' className="nav-link"><b>Party Loyalty Senate</b></Link></li>
					</ul>


				</div>
			</nav>
		</header>
	);
}

export default Header;