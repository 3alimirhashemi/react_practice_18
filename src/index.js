import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

class App extends React.Component{
  render(){
    return(
      <h1>Hi Guys</h1>
    )
  }
}

class Msg extends React.Component{
  constructor(){
    super()
    this.state = {
      time :new Date().toLocaleTimeString()

    }
  }
  render(){
    setInterval(()=>{
      this.setState({
        time :new Date().toLocaleTimeString()
      })
    },1000)
    return(
        <h2 className='timer'>
          it is time: {this.state.time}
        </h2>

  )
  }
}


class Timer extends React.Component{
  render(){
    return(
      <div className='main'>
        <App/>
        <Msg/>
      </div>
    )
  }
}


  ReactDOM.createRoot(document.getElementById('root')).render(<Timer/>);

