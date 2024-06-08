
import React, { useState } from "react";

function Edit(props)
{

    let gd = localStorage.getItem("Theonly");

    

    gd = JSON.parse(gd);

    function update(e)
    {

      e.preventDefault();

      // Getting input values
  var name = document.querySelector('#name').value || document.querySelector('#name').placeholder;
  var email = document.querySelector('#email').value || document.querySelector('#email').placeholder;
  var address = document.querySelector('#address').value || document.querySelector('#address').placeholder;
  var mobileNumber = document.querySelector('#MobileNumber').value || document.querySelector('#MobileNumber').placeholder;
  var companyInstitute = document.querySelector('#CompanyInstitute').value || document.querySelector('#CompanyInstitute').placeholder;
  var graduationDate = document.querySelector('#GraduationDate').value || document.querySelector('#GraduationDate').placeholder;
  var skills = document.querySelector('#Skills').value || document.querySelector('#Skills').placeholder;
  var designationDegree = document.querySelector('#designationDegree').value || document.querySelector('#designationDegree').placeholder;
  // Assuming you have a reference to the parent container element
  var container = document.querySelector('.optional');
  var fieldInputs=[],fieldValues=[];
  // Get the input elements inside the container
  if(container)
  {
    fieldInputs = container.querySelectorAll('label[name="field_name_value"]');
    fieldValues = container.querySelectorAll('input[name="field_value_value"]');
    
  }
  
  // Create arrays to store the values
  var fieldNameValues = [];
  var fieldValueValues = [];
  
  var opt = [];
  
  // Loop through the input elements and retrieve their values
  fieldInputs.forEach(function(input) {
    fieldNameValues.push(input.textContent || input.getAtrribute("placeholder"));
  });
  
  fieldValues.forEach(function(input) {
    fieldValueValues.push(input.value || input.placeholder);
  });
  
  for(let i=0;i<fieldInputs.length;i++)
  {
    opt.push({fname:fieldNameValues[i],
    fvalue:fieldValueValues[i]});
  }

  console.log(skills);

  console.log(opt);
  
   var dgd = {
    name: name,
    email:email,
    address:address,
    mobileNumber:mobileNumber,
    companyInstitute:companyInstitute,
    graduationDate:graduationDate,
    designationDegree:designationDegree,
    skills : skills,
    missal : opt
  
   }

   let data = props.originald;

   const newdata = data.map((obj,id) => {
    if(obj.email === gd.email)
    {
      return dgd;
    }
    return obj;
   })

   props.setogd(newdata);

   alert("Resume Updated successfully, click authorize to view")

    }

     


    return (
        <form>
  <div class="form-group veww">
    <label for="formGroupExampleInput" style = {{fontWeight:"bold"}}>Name</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}  id="name" placeholder = {gd?gd.name:""}></input>
  </div>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Email</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}   id="email" placeholder = {gd?gd.email:""}></input>
  </div>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Address</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}   id="address" placeholder = {gd?gd.address:""}></input>
  </div>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Mobile No</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}   id="MobileNumber" placeholder = {gd?gd.mobileNumber:""}></input>
  </div>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Company/Institute</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}   id="CompanyInstitute"  placeholder = {gd?gd.companyInstitute:""}></input>
  </div>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Graduation Date</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}  id="GraduationDate"  placeholder = {gd?gd.graduationDate:""}></input>
  </div>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Desination Degree</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}  id="designationDegree"  placeholder = {gd?gd.designationDegree:""}></input>
  </div>
  <div class="form-group veww">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}}>Skills</label>
    <input type="text" class="form-control" style = {{width:"40%",position:"relative",right:"6%"}}   id="Skills" placeholder = {gd?gd.skills:""}></input>
  </div>

  {gd.missal.map((data,ind) => {

return (

<>
<div class="form-group veww optional">
    <label for="formGroupExampleInput2" style = {{fontWeight:"bold"}} name = "field_name_value">{data.fname}</label>
    <input type="text" class="form-control" name = "field_value_value" style = {{width:"40%",position:"relative",right:"6%"}}   id="Skills" placeholder = {data.fvalue}></input>
  </div>
</>

)

})}

  <button onClick={update} className="btn btn-primary">Update</button>

</form>
    )
}

export default Edit;