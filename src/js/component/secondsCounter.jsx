import React from "react";

const Card = (props) => {
    return (
        <div className="d-flex">
            <div className="card bg-dark text-white mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.digito}</h5>
                </div>
            </div>
        </div>
    )
}

const SecondsCounter = (props) => {
    return (
        <div className="d-flex">
            <Card digito={<i class="fa-regular fa-clock"></i>}/>
            <Card digito={Math.floor(props.counter / 100000 % 10)} />
            <Card digito={Math.floor(props.counter / 10000 % 10)} />
            <Card digito={Math.floor(props.counter / 1000 % 10)} />
            <Card digito={Math.floor(props.counter / 100 % 10)} />
            <Card digito={Math.floor(props.counter / 10 % 10)} />
            <Card digito={props.counter % 10} />
        </div>
    )
}



export default SecondsCounter;
