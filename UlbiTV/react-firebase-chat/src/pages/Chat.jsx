import { Container, Grid2, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const Chat = () => {
  const { email } = useSelector(state => state.user)
  return (
    <div className='chat'>
      <h1 className='chat__title'>Welcome to the chat, {email}!</h1>

      <Container sx={{
        display: 'flex',
        flexDirection: 'column', alignItems: 'center'
      }}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            display: 'flex',
            alignSelf: 'flex-start',
            paddingLeft: '10%'
          }}
        >
          Chat
        </Typography>
        <div className='chat__window'>
          <div className="chat__messages">
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
            <div className='chat__message'>jgjgjg</div>
          </div>
          <div className='chat__inputField'>
            <input className='chat__input' type="text" name="message" id="message" />
            <button className='chat__btn'>send</button>
          </div>
        </div>
      </Container>
    </div>
  );
}


