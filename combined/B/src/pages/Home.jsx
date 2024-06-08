import React, { useState } from "react";
import { Outlet,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

 
function Home()
{  

  const navigate = useNavigate();

  const [ogd,setogd] = useState([]);

  function goto()
  {
    navigate("/create");
  }

     return (
        <div>

  
    
    <h1>Resume Builder</h1>
           <div class="container mc">
  <div class="row">
    <div class="col">
    <div className="card" style={{width: "18rem"}}>
  <img src="download.png" class="card-img-top" alt="resume"></img>
  <div className="card-body">
    <h5 className="card-title">Resume Creation</h5>
    <p className="card-text">Resume is a mirror with reflection of  what a mind can able to do</p>
    <button onClick={goto} className="btn btn-primary">Create Resume</button>
  </div>
</div>
    </div>
  </div>

  </div></div>

          



       
     )

}

export default Home;