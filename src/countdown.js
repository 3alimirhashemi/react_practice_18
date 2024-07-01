import ReactDOM from 'react-dom/client';
import "./style.css"
import React from "react";


var interval;
class CountDown extends React.Component {
  constructor() {
    super();
    this.state = { 
      seconds: 0,
      minutes: 0,
      hour: 0,
      isStart:false,
    };
  }
  startInterval = () => {
    if(this.state.isStart == false){
      interval = setInterval(()=>{
        this.setState({
          seconds : this.state.seconds +1
        })
        if(this.state.seconds == 60){
          this.setState({
            seconds: 1, 
            minutes: this.state.minutes + 1,
          })
        }
        if(this.state.minutes == 60){
          this.setState({
            minutes: 1,
            hour: this.state.hour + 1,
          })
        } 
      }, 1000)
    }

  }

  stopInterval = () =>{
    this.setState({
      isStart:false
    })
    clearInterval(interval);
  }

  resetInterval = () => {
    this.stopInterval();
    this.setState({
      hour:0,
      minutes:0,
      seconds:0,
    })
  }

  


  render() {
    let h = this.state.hour
    let m = this.state.minutes
    let s = this.state.seconds
    return (
      <div>
        {`${h>9? h:"0"+h} : ${m>9? m:"0"+m} : ${s>9? s:"0"+s}`}
        <div>
        <button onClick={this.startInterval}>start</button>
        <button onClick={this.stopInterval}>stop</button>
        <button onClick={this.resetInterval}>reset</button>
        </div>
      </div>
     
    );
  }
}


export default CountDown