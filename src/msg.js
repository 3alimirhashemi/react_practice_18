import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Timerlist from './timelist';
import { testcontext } from './context';

class Msg extends React.Component{
    constructor(){
      super()
      this.state = {
        time :new Date().toLocaleTimeString(),
        seconds: 0,
        minutes: 0,
        hour: 0,
        isStart:false,
  
      }
    }
    static contextType = testcontext;
    componentDidMount(){
      setInterval(()=>{
        this.setState({
          time :new Date().toLocaleTimeString()
        })
      },1000)
    }
    saveTime = ()=>{
      let h = this.state.hour
      let m = this.state.minutes
      let s = this.state.seconds
      let newTime = `${h>9? h:"0"+h} : ${m>9? m:"0"+m} : ${s>9? s:"0"+s}`
      this.context.setTime([...this.context.time, newTime])
    }

    render(){
      return(
        <div>
          <h2 className='timer' onClick={this.saveTime}>
            it is time: {this.state.time}
          </h2>
          <button className='button' onClick={this.props.settitle}>click</button>
          <button className='btn' 
          style={
            {background:this.props.islight ? "black":"white",
              color:this.props.islight ? "white":"black"
            }
            
            } 
            onClick={this.props.handelLight}>{this.props.islight ? "dark":"light"}</button>
        </div>
  
    )
    }
  }

  export default Msg;