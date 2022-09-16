import LogoInstitucion from '../img/LogoLinkedin.png';
import './Experiencia.css'


function Experiencia(props) {
  return (
<div className='experiencia-caja'>
<h2> {props.name}</h2>
<div className="caja">
      <img className='LogoInstitucion' src={LogoInstitucion} alt="" />
      <div className='experiencia'>
        <h3> Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore ducimus officia sequi
          odit iure dolorem necessitatibus. Quis aut, quibusdam ipsam eos vero error dolorum autem labore
          natus suscipit debitis!
        </p>
      </div>
      <div className="cajaBtn">
        <button />
        <button />
      </div>
    </div>

</div>
    
  );
}

export default Experiencia;
