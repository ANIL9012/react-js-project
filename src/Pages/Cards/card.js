function Card(props) {
  return (
    <>
      <div className="card d-flex align-items-center justify-content-center">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.heading}</h5>
          <p className="card-text">
          {props.dec}
          </p>
         
        </div>
      </div>
    </>
  );
}

export default Card;
