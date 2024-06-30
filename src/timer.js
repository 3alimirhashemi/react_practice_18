import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from "./app"
import Msg from './msg';
import CountDown from './countdown';

class Timer extends React.Component{
  constructor(){
    super()
    this.state = {
        title:"bye guys"    
  }
}
setTextMatch = () => {

  this.setState({
    title:"hello, welcome!"
  })

}
    render(){
      return(
        <div className='main'>
          <App title={this.state.title}/>
          <Msg title={this.setTextMatch}/>
          <CountDown/>
        </div>
      )
    }
  }

  export default Timer;