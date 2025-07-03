

import "./About-us.css"

import Aboutimg from "./../../images/image-1.jpg"

function About() {
  return (
    <>
      <div className="card">
        <img src={Aboutimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-warning">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
