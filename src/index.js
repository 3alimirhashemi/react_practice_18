import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(){
    return(
      <h1>hi guys</h1>
    )
  }
}

class Msg extends React.Component{
  render(){
    return(
        <h2>
          it is time:{new Date().toLocaleTimeString()};
        </h2>

  )
  }
}


class Timer extends React.Component{
  render(){
    return(
      <div>
        <App/>
        <Msg/>
      </div>
    )
  }
}

const tick = ()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(<Timer/>);

}

setInterval(()=>{
  tick();
},1000)
