import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import Data from './components/Data';
import Attendance from './components/Attendance';
import PartyLoyalty from './components/PartyLoyalty';
import Footer from './components/Footer'

import './App.css';
import './components/bootstrap.min.css';


function App() {
  const [congresS, setCongresS] = useState([]);
  const [congresH, setCongresH] = useState([]);

  useEffect(() => {
    axios.defaults.headers['X-API-KEY'] = 'rDYUl6e93qumCwukl6dAaoa8TUr4c6Nt52clfUF';

    axios.all([
      axios.get('https://api.propublica.org/congress/v1/116/senate/members.json'),
      axios.get('https://api.propublica.org/congress/v1/116/house/members.json')
    ]).then(response => {
      setCongresS(response[0].data.results[0].members);
      setCongresH(response[1].data.results[0].members);
     // const apiData = response.data;
      //setMember(apiData.results[0].members);
    }).catch((error) => {
        console.log(error);
      })
  }, []);

  

  return (
    <div className="App container">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/house' element={<Data congress={congresH} />} />
        <Route path='/house/attendancce' element={<Attendance congress={congresH} name={'House'} />} />
        <Route path='/house/partyloyalty' element={<PartyLoyalty congress={congresH} name={'House'} />} />

        <Route path='/senate' element={<Data congress={congresS} />} />
        <Route path='/senate/attendancce' element={<Attendance congress={congresS} name={'Senate'}/>} />
        <Route path='/senate/partyloyalty' element={<PartyLoyalty congress={congresS} name={'Senate'} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;