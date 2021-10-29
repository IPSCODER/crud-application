import React from "react";
import "./Add.css";
import '../App.css';

const Add = () => {
  return (
    // <div id="Add">
      <div id="form">
          <h1 style={{textAlign:"center", margin:"15px"}}>Add Entry</h1>
          <hr/>
          {/* form start */}
          <form name="">
          {/* for name */}
          <label for="fname">Name</label><br/>
          <input type="text" id="fname" name="fname" placeholder="Enter your name" className="input"/><hr/>
          {/* for cocktail */}
          <label for="cocktail" style={{marginTop:"5px"}}>cocktail</label><br/>
          <input type="radio" name="color" value="malta"/>Malta<br/>
          <input type="radio" name="color" value="santr'a"/>Santr'a<br/>
          <input type="radio" name="color" value="sonfee"/>Sonfee<hr/><br/>
          {/* for points */}
          <label for="quantity">Points(0 to 10)</label><br/>
          <input type="number" id="quantity" name="quantity" min="-10" max="10" placeholder="Give Points" className="input"/><hr/>
          {/* for adding and reset */}
          <input type="submit" value="Reset" className="left"/>
          <input type="submit" value="Add" className="left"/>
          </form>
          {/* form end */}
      </div>
    // </div>
  );
};

export default Add;
