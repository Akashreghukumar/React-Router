import React from "react";

const StudentLogin=(props)=>{


    return(
<div>
        <h1>StudentLogin Page</h1>
        <button onClick={props.history.goBack}>Go Backward</button>
        <button onClick={props.history.goForward}>Go Forward</button>
    </div>

    )
    
}

export default StudentLogin