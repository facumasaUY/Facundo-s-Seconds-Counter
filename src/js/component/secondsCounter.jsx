import React from "react";

const Card = (props) => {
    return (
        <div className="d-flex">
            <div className="card text-bd-dark mb-3">
                <div className="card-header"></div>
                <div className="card-body">
                    <h5 className="card-title">{props.digito}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
        </div>
    )
}

const SecondsCounter = (props) => {
    return (
        <div className="d-flex">
     <Card digito={props.counter}/>
     <Card digito={props.counter}/>
     <Card digito={props.counter}/>
     <Card digito={props.counter}/>
     <Card digito={Math.floor(props.counter/10 %10)}/>
     <Card digito={props.counter %10}/>
     </div>
    )
}



export default SecondsCounter;
