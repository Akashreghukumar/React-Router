import React from "react";

const AboutUs=(props)=>{
    return(
        <div>
                <h1>AboutUs Page</h1>
                <button onClick={props.history.goBack}>Go Backward</button>
        <button onClick={props.history.goForward}>Go Forward</button>
            </div>
        
            )
}

export default AboutUs