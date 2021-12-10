import React from "react";

const AdminLogin=(props)=>{
    return(
        <div>
                <h1>AdminLogin Page</h1>
                <button onClick={props.history.goBack}>Go Backward</button>
        <button onClick={props.history.goForward}>Go Forward</button>
            </div>
        
            )

}

export default AdminLogin