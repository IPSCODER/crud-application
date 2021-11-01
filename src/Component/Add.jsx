import React, { useState, useEffect, useRef } from "react";
import "./Add.css";
import '../App.css';

const Add = (props) => {
  const [tripType, setTripType] = useState({...props.isEdit.cocktail});
  const textInput1 = useRef();
  const textInput2 = useRef();


  useEffect(() => {
    setTripType(props.isEdit.cocktail);
}, [props.isEdit.cocktail]);

  let userData = { isEditable:false,   name:'', cocktail:'', points:''  };
  if (props.isEdit) {
    console.log(props.isEdit);
    userData = {   
       isEditable: true,
       name:props.isEdit.name,
       cocktail:props.isEdit.cocktail,
       points  :props.isEdit.points
       }
   
  } else {
    console.log("This form you can add new user");
  }


  const handleSubmit = (e)=>{

    e.preventDefault();

    console.log(e);
      // props.addUser(e)
      const data = new FormData(e.target);

      let userData ={      
        name: data.get('name'),
        cocktail: data.get('cocktail'),
        points: data.get('points')
    };

    if (props.isEdit) {
      userData.isUpdate= true
    } else {
      userData.isUpdate= false      
    }
   props.addUser(userData);
   userData = {};
   userData.isEditable = false;

  }
  const resetData = ()=>{
    userData = {};
    userData.isEditable = false;
    textInput1.current.value = "";
    textInput2.current.value = "";
    props.reset();
  }

  return (
      <div id="form">
          <h1 style={{textAlign:"center", margin:"15px"}}>Add Entry</h1>
          <hr/>
          {/* form start */}
          <form noValidate onSubmit={event => handleSubmit(event)}>
          {/* for name */}
          <label for="name">Name</label><br/>
          <input type="text" id="name" name="name" ref={textInput1} placeholder="Enter your name" defaultValue={userData.name} className="input"/><hr/>
          {/* for cocktail */}
         
         <div>
          <label for="cocktail" style={{marginTop:"5px"}}>cocktail</label><br/>
          <input type="radio" name="cocktail" onClick={() => {setTripType("malta");}}  defaultChecked={tripType == 'malta'} value="malta"/>Malta<br/>
          <input type="radio" name="cocktail" onClick={() => {setTripType("santra");}} defaultChecked={tripType == 'santra' } value="santra"/>Santr'a<br/>
          <input type="radio" name="cocktail" onClick={() => {setTripType('sonfee');}} defaultChecked={tripType == 'sonfee' } value="sonfee"/>Sonfee<hr/><br/>
      </div>

          {/* for points */}
          <label for="quantity">Points(0 to 10)</label><br/>
          <input type="number" id="quantity" ref={textInput2} name="points" defaultValue={userData.points} min="-10" max="10" placeholder="Give Points" className="input"/><hr/>
          {/* for adding and reset */}
          <input type="button" value="Reset" onClick={resetData} className="left"/>
          <input type="submit" value={userData.isEditable ? "Edit": "Add"} className={userData.isEditable ? "left btn-edit": "left btn-danger"}/>
          </form>
          {/* form end */}
      </div>
  );
};

export default Add;
