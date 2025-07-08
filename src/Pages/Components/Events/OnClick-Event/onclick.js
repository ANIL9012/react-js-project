import { useState } from "react";
import onbulbpath from "../../../../images/pic_bulbon-on.jpg";
import offbulbpath from "../../../../images/pic_bulboff.jpg";

import "./onclick.css"

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
      <div className="card text-bg-dark">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Bulb Event card
          </p>
          <div className="onoffbtn d-flex align-items-center justify-content-between text-bg-warning">
            <button className="btn btn-secondary" onClick={onbulb}>On</button>
            <button className="btn btn-secondary" onClick={offbulb}>Off</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bulbproject;