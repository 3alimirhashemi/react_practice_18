import React from 'react';
import ReactDOM from 'react-dom/client';


const Timer = ()=>{
    const time =(
      <div>
        <h1>hi guys</h1>
        <h2>
          it is time:{new Date().toLocaleTimeString()};
        </h2>
      </div>
    )
    ReactDOM.createRoot(document.getElementById('root')).render(time);
}

setInterval(()=>{
  Timer();
},1000)
