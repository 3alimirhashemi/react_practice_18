import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from "./app"
import Msg from './msg';
import CountDown from './countdown';

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

  const handeltitle = ()=>{
    setTextMatch('WELLCOME GUYS..')
  }
  return(
    <div className='main'>
      <App title={title}/>
      <Msg settitle={handeltitle}/>
      <CountDown/>
    </div>
  )
 }

  export default Timer;