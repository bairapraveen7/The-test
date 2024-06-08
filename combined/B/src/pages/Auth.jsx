
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

function Auth(props)
{

    

    let gd = props.originald;

    const navigate = useNavigate();

    const [val,setval] = useState();

    const [msg,setmsg] = useState("");

    function changeit(e)
    {
        setval(e.target.value);
    }

    function sett(e)
    {
        e.preventDefault();
        gd.map((data,index) =>{
            if(data.email == val)
            {
                console.log(data);
                localStorage.setItem("Theonly",JSON.stringify(data));
                navigate("/view");
            }
        });
        setmsg("Sorry! we could not find the email");
    }

    return (
        <>
        <h1>Login</h1>
        <div class="col">
      <input type="email" class="form-control" style = {{width:"20%",marginLeft:"40%"}} onChange={changeit} placeholder="Enter your email"></input>
    </div>
        <button onClick={sett} className="btn btn-danger">Submit</button>
        {msg && <p style = {{color:"red"}}>{msg}</p>}
        </>
    )
}

export default Auth;