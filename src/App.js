import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Photo, Title, Wrapper , MyButton} from "./MyButton.js";

function App() {
  return (
    <Wrapper>
      <Photo src="/profile.png" />

      <Title
        style={{
          color: "Blue"
        }}
      >
     Ahmed Lajmi
      </Title>
      <MyButton onSimpleClick={()=>{ window.location="https://facebook.com"}}> facebook  </MyButton>
      <MyButton onSimpleClick={()=>{ window.location="https://linkedine.com"}}> linkedine </MyButton>
    </Wrapper>
  );
}

export default App;
