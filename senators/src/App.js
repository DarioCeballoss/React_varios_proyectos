import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import HouseData from './components/HouseData';
import HouseAttendance from './components/HouseAttendance';
import HousePartyLoyalty from './components/HousePartyLoyalty';
import SenateData from './components/SenateData';
import SenateAttendance from './components/SenateAttendance';
import SenatePartyLoyalty from './components/SenatePartyLoyalty';

import Footer from './components/Footer'


import './components/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/favoritos' element={<HouseData />} />
        <Route path='/listado' element={<HouseAttendance />} />
        <Route path='/detalle' element={<HousePartyLoyalty />} />

        <Route path='/resultados' element={<SenateData />} />
        <Route path='/resultados' element={<SenateAttendance />} />
        <Route path='/favoritos' element={<SenatePartyLoyalty />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
