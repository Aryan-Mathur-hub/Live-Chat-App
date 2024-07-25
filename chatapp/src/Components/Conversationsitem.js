import React from 'react'
import "./myStyles.css";
import './Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Conversationsitem({props}) {
  const navigator = useNavigate();
  return (
    <div className='conversation-container' onClick={()=>{
      navigator("chat")
    }}>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastMessage'>{props.lastMessage}</p>
      <p className='con-timeStamp'>{props.timeStamp}</p>
    </div>
  )
}
