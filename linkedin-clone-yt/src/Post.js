import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, messaje, photoUrl }) {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />

        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post_body'>
        <p>{messaje}</p>
      </div>
      
      <div className='post_buttons'>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
        <InputOption Icon={ChatOutlinedIcon} title='Coment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />

      </div>
    </div>
  );
}

export default Post;
