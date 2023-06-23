import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useAppContext } from './context';

const Carousel = () => {

  const ctx = useAppContext();
  const {people,currentPerson,nextSlide,prevSlide,auto} = ctx;

  useEffect(()=>{
    if(!auto){ return;}

    //person değiştikten 2 sn sonra tekrar tetiklenecek
    let timer = setTimeout(()=>{
      nextSlide()
    },2000)

    return() => {
      clearInterval(timer)
    }
  },[currentPerson])

  /*Bu şekilde de olabilirdi ama allahın cezası  strictmodda 
  useeffect 2 defa çalıştığı için bu olmuyor
  
  useEffect(()=>{
    let timer = setInterval(()=>{
      nextSlide()
    },2000)
  },[])*/

  return (
    <section className='slider-container'>
      {people.map((person,index) => {
        const {id, image,name,title,quote} = person;
        return <article className="slide" key={id} style={{transform:`translateX(${100 * (index - currentPerson)}%)`}}>
          <img src={image} alt={name} className='person-img'/>
          <h5 className="name">{name}</h5>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>

        </article>
      })}
      <button className="prev" type='buton' onClick={prevSlide}>
        <FiChevronLeft/>
      </button>
      <button className="next" type='buton' onClick={nextSlide}>
        <FiChevronRight/>
      </button>
    </section>
  );
};
export default Carousel;
