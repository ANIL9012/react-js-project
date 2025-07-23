import { useState } from "react";
import onbulbpath from "../../../../images/pic_bulbon-on.jpg";
import offbulbpath from "../../../../images/pic_bulboff.jpg";

import "../OnClick-Event/Onclick.css"

function Bulbproject() {
  const [image, setimage] = useState(offbulbpath);

  function onbulb(){
    setimage(onbulbpath)
  }

  function offbulb(){
    setimage(offbulbpath)
  }

  return (
    <>
      <div className="card text-bg-dark p-0">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">This is a Bulb Card</h5>
          <p className="card-text">
            Bulb Event card
          </p>
          <div className="onoffbtn d-flex align-items-center justify-content-between text-bg-warning">
            <button className="btn btn-success rounded-0" onClick={onbulb}>On</button>
            <button className="btn btn-secondary rounded-0" onClick={offbulb}>Off</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bulbproject;