//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter/>);

<>
<SecondsCounter></SecondsCounter>
</>


setInterval(() => {
    seconds++;
    app.render(<>
    <SecondsCounter counter={seconds}/>
    </>);} ,1000);
