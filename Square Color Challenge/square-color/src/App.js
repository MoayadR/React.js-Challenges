import './App.css';
import './components/SquareDiv'
import SquareDiv from './components/SquareDiv';
import ColorInput from './components/ColorInput';
import { useState } from 'react';

function App() {
  const [colorState , setColorState] = useState('');

  return (
    <div className='appDiv'>
     <SquareDiv colorState = {colorState}/>
     <ColorInput colorState = {colorState} setColorState = {setColorState}/>
    </div>
  );
}

export default App;
