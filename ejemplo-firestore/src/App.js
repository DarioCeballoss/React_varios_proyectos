import './App.css';
import Dot from './Dot';
import db from './firebase';
import { useEffect, useState} from 'react';
import { collection, onSnapshot } from 'firebase/firestore';


function App() {
  const [colors, setColors] = useState ([]);
console.log(colors);
  useEffect(() => {
    onSnapshot(collection(db, 'colors'), (snapshot) => {
      setColors(snapshot.docs.map(doc => doc.data()));
    })
  }, []);


  return (
    <div className="App">
      <button className='button' style={{ backgroundColor: 'white' }}>NEW</button>
      {colors.map((estado) =>(
        <Dot  color={estado.value} name={estado.name} />

      ))}
      
    </div>
  );
}

export default App;
