

import "./service.css"
import serviceimg from "./../../images/image-4.jpg"

function Service() {
  return (
    <>
      <div class="service-card card">
        <img src={serviceimg} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card Services title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Service;
