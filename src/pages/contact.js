import React from "react";

const Contact=(props)=>{
    return(
        <div>
                <h1>Contact Page</h1>
                <button onClick={props.history.goBack}>Go Backward</button>
        <button onClick={props.history.goForward}>Go Forward</button>
            </div>
        
            )

}

export default Contact