import React from 'react'
import styled from 'styled-components'
import Robot from '../assets/robot.gif'
export default function Welcome({ currentUser }) {
    
  return (
    <Container>
    <img src={Robot} alt="ROBOT" />  
    <h1>
    Welcome, <span>{currentUser.username}!</span>
    </h1>
    <h3>Please select a chat to start Messaging....</h3>
    </Container>
  )
}

const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  gap: 1rem;
  height: 100%;

  img {
    height: 20rem;
  }

  h1 {
    font-size: 2rem;

    span {
      color: #4e0eff;
    }
  }

  h3 {
    color: #8e8e8e;
  }
`;
