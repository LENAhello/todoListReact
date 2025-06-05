import { useState } from 'react';
import {Typography} from '@mui/material';
import TodoPage from './components/TodoPage';

function App() {

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundImage: 'linear-gradient(to right, #2F2C38, #8A8EA6)'
  }

  return (
    <div style={divStyle}>
      <TodoPage/>
    </div>
  )
}

export default App
