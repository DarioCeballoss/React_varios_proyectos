import './App.css';
import Experiencia from './component/Experiencia';
import Header from './component/Header';
import Perfil from './component/Perfil';


function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Perfil />
        <Experiencia name='Experiencia' />
        <Experiencia name='Educacion' />

      </section>
    </div>
  );
}

export default App;
