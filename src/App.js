// the first and most important thing to do
//PSEUDOCODE
//main containing a span with a paragraph aligned to the center then that image.
//the dice posiioned to the bottom and center. then transfrom translate to make it like that
//hats all for the otlook
//i think since the text and the span are changing theyd be stored in a state. and the api calll will be made using the useEffect hook beacuse calling API in react is a side effect //
//onclick to the dice and the useeffect will be inside i think and the dependecy array will have to be changing every now and then because it has to be aking a new request to the API every now and then
//worry aboout a clean up function that gets returned
//this is like the first project i would not use other components asides  the root component
//try using a ternary so something appears on the screen before clicking to get data from the API

import React,{useState,useEffect} from 'react'
import mobileImg from '../src/images/pattern-divider-mobile.svg'
import desktopImg from '../src/images/pattern-divider-desktop.svg'
import dice from '../src/images/icon-dice.svg'

function App() {
  const [data,setData]=useState({
    numberText:"",
    text:""
  })

 useEffect(()=>{
      
      fetch("https://api.adviceslip.com/advice")
      .then(res=>res.json())
      .then(data=>setData(prev=>{
        return {
          ...prev,
          numberText:data.slip.id,
          text:data.slip.advice

        }
      }))
      .catch(err=>console.log(err))
 },[0])
  useEffect(()=>{
   
    const dice= document.querySelector("#dice")
    dice.addEventListener("click",()=>{

      fetch("https://api.adviceslip.com/advice")
      .then(res=>res.json())
      // .then(data=>console.log(data.slip))
      .then(data=>setData(prev=>{
        return {
          ...prev,
          numberText:data.slip.id,
          text:data.slip.advice
        }
      }))
      .catch(err=>console.log(err))
    })
    },[])
  console.log(data.numberText)
  console.log(data.text)

  return (
    <>
      <span className='outerSpan'>Advice <span className="innerSpan">{data.numberText}</span></span>
      <p className='text'>
        {`"${data.text}"`}
      </p>
      <img src={mobileImg} alt="mobile-img" className='mobile-img' />
      <img src={desktopImg} alt="desktop-img" className='desktop-img' />
      <div id='dice'>
        <img src={dice} alt="dice-img" />
      </div>
    </>
  );
}

export default App;


