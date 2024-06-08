import React from "react";
import { useNavigate } from "react-router-dom";


function View(props)
{

    let gd = localStorage.getItem("Theonly");

    gd = JSON.parse(gd);

    console.log(gd);

    const navigate = useNavigate();

    function update()
    {

      let data = props.originald;



    }

    function send(e)
    {
        e.preventDefault();
         navigate("/edit")
    }

    return (
        <>

<form>
  <div class="form-group veww">
    <label for="formGroupExampleInput" style = {{fontWeight:"bold"}}>Name: </label>
    <label>{gd?gd.name:""}</label>
  </div>
  <hr></hr>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Email:</label>
    <label>{gd?gd.email:""}</label>
  </div>
  <hr></hr>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Address:</label>
    <label>{gd?gd.address:""}</label>
  </div>
  <hr></hr>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Mobile No:</label>
     <label>{gd?gd.mobileNumber:""}</label>
  </div>
  <hr></hr>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Company/Institute:</label>
   <label>{gd?gd.companyInstitute:""}</label>
  </div>
  <hr></hr>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Graduation Date:</label>
    <label>{gd?gd.graduationDate:""}</label>
  </div>
  <hr></hr>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Designation Degree:</label>
    <label>{gd?gd.designationDegree:""}</label>
  </div>
  <hr></hr>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Skills:</label>
    <label>{gd?gd.skills:""}</label>
  </div>
  <hr></hr>

  {gd.missal.map((data,ind) => {

    return (

<>
<div class="form-group veww">
<label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>{data.fname}</label>
<label>{data.fvalue}</label>
</div>
</>

    )

  })}
   <hr></hr>

  <button onClick={send} className="btn btn-danger">Edit Resume</button>
  <hr></hr>

</form>
        </>
    )
}

export default View;