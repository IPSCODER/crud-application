/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from "react";
import "./Edit.css";
import '../App.css';

// This is functional container used for displaying the user data
const VIEWUSER = (props) => {
 
  let data = props.userData.map((e, key) => {
    return <tr>
          <td>{e.name}</td>
          <td>{e.cocktail}</td>
          <td>{e.points}</td>
          <td>
            <button onClick={() => { props.editUser(e,key) }}>Edit</button>
            <button onClick={() => { props.deleteuser(key) }}>Delete</button>
          </td>
        </tr>;
});
  return (  
  
    <>
        <div id="table">

        {/* scoreboard start */}
          <div id="heading">
            <div>
              #1
              <br />
              malta(26)
            </div>
            <div>
              #2
              <br />
              Santra(8)
            </div>
            <div>
              #3
              <br />
              Sonfee(4)
            </div>
          </div>
          <hr/>
          {/* scoreboard end */}

    {/* table start */}
          <table>
            <tr style={{color:"darkslateblue"}}>
              <th>Name</th>
              <th>Cocktail</th>
              <th>Points</th>
              <th>Action</th>
            </tr>
            {data}           
          </table>
          {/* table end */}
        </div>
    </>
  );
};

export default VIEWUSER;
