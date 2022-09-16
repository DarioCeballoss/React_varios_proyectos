import './Perfil.css';
import fotoPerfil from '../img/fotoPerfil.png';

function Perfil() {
  return (
    <article className="perfil-box">

      <span className='perfil'>
        <img src={fotoPerfil} alt="Foto de perfil" />
        <h3>Dario Ceballos</h3>
        <h4>FullStack Developer Jr.</h4>
      </span>

      <span>
        <span className="">
          <h3> Sobre mi</h3>
          <button onclick="#" className="btnEditElim , edit" />
          <button className="btnEditElim , elim" />
        </span>
        <p>
          Mi motivación principal es el crecimiento dentro de la institución, lo que me incentiva a
          concentrarme en mis tres cualidades más destacadas, “Autoexigente, proactivo, meritocratico”. Me
          considero una persona en continuo crecimiento, me gusta capacitarme y estudiar diversas áreas de
          interés. Complemento muy bien trabajando en equipo, ya sean amplios o reducidos.
        </p>
      </span>

    </article>
  );
}

export default Perfil;