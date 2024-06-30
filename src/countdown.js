import ReactDOM from 'react-dom/client';
import "./style.css"
import React from "react";

class CountDown extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 20 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(){
    if (this.state.seconds == "0"){
      clearInterval(this.interval);

    }
  }
  

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <form>

        </form>
        Seconds: {this.state.seconds}
        
      </div>
     
    );
  }
}


export default CountDown