import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';

import {TagsInput} from 'react-tag-input-component';

 
function Create(props)
{


  const [selec, setSelected] = useState([]);

  const [msg,setmsg] = useState("");


  const [data,setdata] = useState({
  });


  const submit = (e) => {

    e.preventDefault();

    // Getting input values
var name = document.querySelector('input[placeholder="Name"]').value;
var email = document.querySelector('input[placeholder="Email"]').value;
var address = document.querySelector('textarea[placeholder="Address"]').value;
var mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
var companyInstitute = document.querySelector('input[placeholder="Company/Institute"]').value;
var graduationDate = document.querySelector('input[placeholder="Graduation date"]').value;
var designationDegree = document.querySelector('input[placeholder="designation/degree"]').value;
// Assuming you have a reference to the parent container element
var container = document.querySelector('.optional');
var fieldInputs=[],fieldValues=[];
// Get the input elements inside the container
if(container)
{
  fieldInputs = container.querySelectorAll('input[name="field_name_value"]');
  fieldValues = container.querySelectorAll('input[name="field_value_value"]');
  
}

// Create arrays to store the values
var fieldNameValues = [];
var fieldValueValues = [];

var opt = [];

// Loop through the input elements and retrieve their values
fieldInputs.forEach(function(input) {
  fieldNameValues.push(input.value);
});

fieldValues.forEach(function(input) {
  fieldValueValues.push(input.value);
});

for(let i=0;i<fieldInputs.length;i++)
{
  opt.push({fname:fieldNameValues[i],
  fvalue:fieldValueValues[i]});
}

 var gd = {
  name: name,
  email:email,
  address:address,
  mobileNumber:mobileNumber,
  companyInstitute:companyInstitute,
  graduationDate:graduationDate,
  designationDegree:designationDegree,
  skills : selec,
  missal : opt

 }



 let ogd = props.originald,setogd = props.setogd,flag = 0;


 ogd.map((data,ind) => {
      if(data.email === email)
      {
        flag = 1;
      }
 });

 if(flag == 1)
 {
  setmsg("Sorry, This email is already been used");
 }
 else
 {
  alert("Resume created successfully, click authorize to view")
  setmsg("");
  setogd([...ogd,gd]);
 }

 console.log(ogd);

 


  }



  const [arr, setArr] = useState([]);

  const changeit = (e) => {
    const id = e.target.id;
    const newarr = arr.map((obj,ind) => {

      if(ind == id)
      {
        return {
          ...obj,
          [e.target.name] : e.target.value
        }
      }
      return obj;

    });

    setArr(newarr);

  }

  const removeInput = (e) => {
         e.preventDefault();
         setArr(arr.filter((tag,index) =>  index!=e.target.value));
  }

  const addInput = (e) => {
    e.preventDefault();
    setArr(s => {
      return [
        ...s,
        {
          field_name_value: "",
          field_value_value:""
        }
      ];
    });
  };

    return (
        <>
         <h1>Create Your Resume</h1>
        <div className="theform">
          
        <form>
            <h2 className="personal">Personal Details</h2>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Name"></input>
      
    </div>
    <div class="col">
      <input type="email" class="form-control" placeholder="Email"></input>
    </div>
    <div class="col">
      <textarea  class="form-control" placeholder="Address"></textarea>
    </div>
    <div class="col">
      <input type="phone" class="form-control" placeholder="Mobile Number"></input>
    </div>
     
    <h2 className="personal">Education</h2>
    <div class="col">
      <input type="text" class="form-control" placeholder="Company/Institute"></input>
    </div>
     
    <div class="col">
      <input type="date" style={{width:"40%"}} class="form-control" placeholder="Graduation date"></input>
    </div>
   
    <div class="col">
      <input type="text" class="form-control" placeholder="designation/degree"></input>
    </div> 
    <button type="button" onClick={addInput} class="btn btn-outline-info">+ ADD FIELDS</button>
    
      {arr.map((item, i) => {
        return (
          <div className='optional'>
          
    <div class="col">
      <input type="text" class="form-control" name = "field_name_value" style = {{fontWeight : "bold"}} value={item.field_name_value}
            id={i}
             onChange={changeit} placeholder="Field Input" ></input>
    </div> 
     <div class="col">
      <input type="text" class="form-control" name = "field_value_value" value={item.field_value_value}
            id={i}
             onChange={changeit} placeholder="Field value"></input>
    </div>
    <button type="button"   value={i} onClick={removeInput} class="btn btn-outline-warning right">- Delete field</button>
    </div>
           
        );
      })}

  </div>

<h2 className="personal">Skills</h2>

<TagsInput
        value={selec}
        style = {{width:"60%"}}
        onChange={setSelected}
        name="Skills"
        placeHolder="Specifiy skills"
      />

      <button onClick={submit} className='btn btn-danger' style = {{margin:"2%"}}>Submit</button>

      {msg && <p style = {{color:"red"}}>{msg}</p>}

</form>

</div>
        
        
        </>
    )
}

export default Create;