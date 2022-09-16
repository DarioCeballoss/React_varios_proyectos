import LogoArg from '../img/LogoArg.png';
import LogoGith from '../img/LogoGitH.png';
import LogoLinkedin from '../img/LogoLinkedin.png';
import LogoIz from '../img/LogoIz.png';
import LogoNom from '../img/LogoNom.png';
import LogoDe from '../img/LogoDe.png';
import './Header.css';

function Header() {
  return (

    <header>
      <div className="BarraSup">
        <img src={LogoArg} className="espaciado alaIz" alt="Logo Personal" />
        <img src={LogoGith} className="espaciado" alt="Logo GuitHub" />
        <img src={LogoLinkedin} className="espaciado" alt="Logo Linkedin" />
        <button type="button" className="btn btn-warning">Iniciar sesión</button>
      </div>
      <div id="LogoAnimado">
        <img className="logoIz" src={LogoIz} alt="Logo Parte Izquierda" />
        <img className="logoNom" src={LogoNom} alt=" Nombre Personal" />
        <img className="logoDe" src={LogoDe} alt="Logo Parte Derecha" />
      </div>
    </header>

  );
}

export default Header;
