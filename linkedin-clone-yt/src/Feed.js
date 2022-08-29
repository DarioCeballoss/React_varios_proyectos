import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';
import { collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from './firebase';


function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  ///////  OK  /////////
  useEffect(() => {
    onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }
      )));
    });
  });
  /////////OK///////////
  const sendPost = (e) => {
    e.preventDefault();
    try {
      const docRef = addDoc(collection(db, 'posts'), {
        name: 'Dario Ceballos',
        description: 'pruevaFirebase',
        messaje: input,
        photoUrl: '',
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  ////////////////////////////
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventIcon} title='Event' color='#C0CBCD' />
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />

        </div>
      </div>
      {posts.map(({ id, data: { name, description, messaje, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          messaje={messaje}
          photoUrl={photoUrl}
        />
      ))}

    </div>
  );
}

export default Feed;
