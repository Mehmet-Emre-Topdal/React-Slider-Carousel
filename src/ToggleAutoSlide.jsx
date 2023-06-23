import React from 'react'
import { useAppContext } from './context';

function Button(){
  const ctx = useAppContext();
  const { toggleAutoSlide, auto } = ctx;

  return (
    <button onClick={toggleAutoSlide} className='btn mt-25'>
      {auto ? "stop" : "start"} auto sliding
    </button>
  );


}

function ToggleAutoSlide() {
  return (
    <div className='center'>
      <Button/>
    </div>
  )
}

export default ToggleAutoSlide