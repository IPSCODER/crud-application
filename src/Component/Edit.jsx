import React from "react";
import "./Edit.css";
import '../App.css';

const Edit = () => {
  return (
    <>
      {/* <div id="Edit"> */}
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
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>$100</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>$150</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Joe</td>
              <td>Swanson</td>
              <td>$300</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Cleveland</td>
              <td>Brown</td>
              <td>$250</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>            
          </table>
          {/* table end */}
        </div>
      {/* </div> */}
    </>
  );
};

export default Edit;
