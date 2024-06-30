import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

class App extends React.Component{
    render(){
      return(
        <h1>{this.props.title}</h1>
      )
    }
  }

  export default App;