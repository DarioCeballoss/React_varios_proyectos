import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20210313/pngtree-colorful-streamer-soft-gradient-background-image_584089.jpg" alt="" />
        <Avatar className='sidebar_avatar' />
        <h2>Dario Ceballos</h2>
        <h4>darioceballos75@gmail.com</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p> Who veiwed you</p>
          <p className='sidebar_statNumber'>2,621</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on post</p>
          <p className='sidebar_statNumber'>3,516</p>
        </div>
      </div>

      <div className='sidebar_botton'>
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
