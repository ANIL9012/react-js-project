

import "./service.css"
import serviceimg from "./../../images/image-4.jpg"

import Bulbproject from "../Components/Events/OnClick-Event/onclick.js";
import CrudCard from "../Components/Crud/Crud.js";

function Service() {
  return (
    <>
      <div className="service-card card h-100 p-0">
        <img src={serviceimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card Services title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="/" className="btn btn-danger">
            Go somewhere
          </a>
        </div>
      </div>

      <Bulbproject/>
      <CrudCard/>

    </>
  );
}

export default Service;
