import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

class Msg extends React.Component{
    constructor(){
      super()
      this.state = {
        time :new Date().toLocaleTimeString()
  
      }
    }
    componentDidMount(){
      setInterval(()=>{
        this.setState({
          time :new Date().toLocaleTimeString()
        })
      },1000)
    }

    render(){
      return(
        <div>
          <h2 className='timer'>
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