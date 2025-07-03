

import "./service.css"
import serviceimg from "./../../images/image-4.jpg"

function Service() {
  return (
    <>
      <div className="service-card card">
        <img src={serviceimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card Services title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Service;
