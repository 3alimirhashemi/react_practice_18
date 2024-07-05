import React from 'react';
import { useState } from 'react';
import "./style.css"
import App from "./app"
import Msg from './msg';
import CountDown from './countdown';
import { testcontext } from './context';
import Timerlist from './timelist';

// class Timer extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//         title:"bye guys"    
//   }
// }
// setTextMatch = () => {

//   this.setState({
//     title:"hello, welcome!"
//   })

// }
//     render(){
//       return(
//         <div className='main'>
//           <App title={this.state.title}/>
//           <Msg title={this.setTextMatch}/>
//           <CountDown/>
//         </div>
//       )
//     }
//   }
// const Timer = () => {
//   const [title, setTitle]= useState("Hi Guys")

//   const setTextMatch = () => { 
//     setTitle("hello, welcome!")
//   }


//       return(
//         <div className='main'>
//           <App title={title}/>
//           <Msg settitle={setTextMatch}/>
//           <CountDown/>
//         </div>
//       )
    
// }
 const Timer = () => {
  const [title, setTextMatch] = useState('HI GUYS..')
  const [islight, setLight] = useState(false)
  const [time,setTime] = useState(["09 : 12 : 12", "00 : 12 : 12",])

  const handeltitle = ()=>{
    setTextMatch('WELLCOME GUYS..')
  }
  const handelLight = () =>{
    setLight(!islight)
  }
  return(
    <testcontext.Provider value={{
      time:time,
      setTime:setTime,
    }}>
        <div className='main' style={{background:islight ? "white":"black"}}>
          <App title={title} />
          <Msg 
          settitle={handeltitle} 
          handelLight={handelLight}
           islight={islight} />
          <CountDown />
          <Timerlist />
        </div>
    </testcontext.Provider>
  )
 }

  export default Timer;