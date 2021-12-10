import React from "react";

const Home=(props)=>{


    return(
<div>
        <h1>Home Page</h1>
        <button onClick={props.history.goBack}>Go Backward</button>
        <button onClick={props.history.goForward}>Go Forward</button>
    </div>

    )
    
}

export default Home