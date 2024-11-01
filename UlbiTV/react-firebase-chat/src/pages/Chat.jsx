import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, addDoc, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Loader } from '../components';
import { getAuth } from 'firebase/auth';

export const Chat = () => {
  const { email } = useSelector(state => state.user)
  const auth = getAuth()
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')

  // Запрос на получение сообщений, отсортированных по времени
  const messagesRef = collection(db, 'messages')
  const customQuery = query(messagesRef, orderBy('createdAt'))
  const [messages, loading, , snapshot] = useCollectionData(customQuery, {
    idField: 'id'
  })
   console.log(snapshot)
  const handlerMessageSending = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!value.trim()) return;

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        uid: user.uid,
        email: user.email,
        text: value,
        createdAt: Timestamp.now()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setValue('')
  }
  console.log(messages)
  return (
    <div className='chat'>
      <h1 className='chat__title'>Welcome to the chat, {email}!</h1>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column', alignItems: 'center'
      }}>
        {/* <Typography
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
        </Typography> */}
        <div className='chat__window'>
          {loading
            ? <Loader />
            : <div className="chat__messages">
              {
               
                messages && messages.map((message, index) => {
                  // console.log(message)
                  return (
                    <div className="chat__message" key={index}>
                      <strong>{message.email}: </strong>
                      {message.text}
                    </div>
                  )
                })
              }
            </div>
          }
          <form
            className='chat__inputField'
            onSubmit={sendMessage}
          >
            <input
              className='chat__input'
              type="text"
              name="message"
              id="message"
              placeholder='Enter your message'
              value={value}
              onChange={handlerMessageSending}
              onSubmit={sendMessage}
            />
            <button
              className='chat__btn'
              onClick={sendMessage}
              type='submit'
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}


