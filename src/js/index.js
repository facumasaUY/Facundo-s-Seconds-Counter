//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";
import { render } from "react-dom";

let seconds = 0
let interval;
  

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter counter={seconds} />);

const renderCounter = () => {
    seconds++;
    app.render(<>
        <SecondsCounter counter={seconds} />
        <div>
            <div className="btn-group" role="group" arial-label="Basic example">
                <button onClick={()=>{
                    clearInterval(interval)
                    interval = setInterval(renderCounter, 1000);
                    seconds = -1;
                }}type="button" className="btn btn-outline-danger">Restart</button>
                <button onClick={()=>{
                    clearInterval(interval);
                }} type="button" className="btn btn-outline-warning">Pause</button>
                <button onClick={()=>{
                    clearInterval(interval)
                    interval = setInterval(renderCounter, 1000);
                }} type="button" className="btn btn-outline-info">Play</button>
            </div>
        </div>
    </>);
}
interval = setInterval (renderCounter,1000);