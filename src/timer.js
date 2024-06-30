import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from "./app"
import Msg from './msg';
import CountDown from './countdown';

class Timer extends React.Component{
    render(){
      return(
        <div className='main'>
          <App/>
          <Msg/>
          <CountDown/>
        </div>
      )
    }
  }

  export default Timer;