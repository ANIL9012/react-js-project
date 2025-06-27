

import "./About-us.css"

import Aboutimg from "./../../images/image-1.jpg"

function About() {
  return (
    <>
      <div class="card">
        <img src={Aboutimg} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" class="btn btn-warning">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
