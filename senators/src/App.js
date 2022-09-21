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
  const [congress, setMember] = useState([]);

  useEffect(() => {
    const endPoint = 'https://api.propublica.org/congress/v1/116/senate/members.json';
    axios.defaults.headers['X-API-KEY'] = 'rDYUl6e93qumCwukl6dAaoa8TUr4c6Nt52clfUF';

    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMember(apiData.results[0].members);

      }).catch((error) => {
        console.log(error);
      })
  }, [setMember]);
  console.log('app   ');
console.log(congress);

  return (
    <div className="App container">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/house' element={<Data congress={congress} />} />
        <Route path='/house/attendancce' element={<Attendance congress={congress} />} />
        <Route path='/house/partyloyalty' element={<PartyLoyalty congress={congress} />} />

        <Route path='/senate' element={<Data congress={congress} />} />
        <Route path='/senate/attendancce' element={<Attendance congress={congress} />} />
        <Route path='/senate/partyloyalty' element={<PartyLoyalty congress={congress} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
