import React from 'react';
import './Dot.css';


function Dot({ color, name, id }) {




  return (
    <div key={id} className='dot'>
      <button className='button'>EDIT</button>

      <div className='dot-color' style={{ backgroundColor: color }} >
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Dot;
