import './App.css';
import './components/SquareDiv'
import SquareDiv from './components/SquareDiv';
import ColorInput from './components/ColorInput';
import { useState } from 'react';

function App() {
  const [colorState , setColorState] = useState('');
  const [hexValue , setHexValue] = useState('');

  return (
    <div className='appDiv'>
     <SquareDiv colorState = {colorState} hexValue = {hexValue} />
     <ColorInput colorState = {colorState} setColorState = {setColorState} setHexValue ={setHexValue}/>
    </div>
  );
}

export default App;
