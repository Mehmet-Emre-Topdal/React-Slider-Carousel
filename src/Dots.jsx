import React from 'react'
import Button from './Dot'
import { useAppContext } from './context';

export default function Dots() {
    const ctx = useAppContext();
    const { people, currentPerson, nextSlide, prevSlide } = ctx;

  return (
    <div className='center g-15'>
        {people.map((val, i)=>{
            return <Button key={i} index={i} currentPerson={currentPerson} />
        })}

    </div>
  )
}
