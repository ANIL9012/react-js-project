function Card(props) {
  return (
    <>
      <div class="card d-flex align-items-center justify-content-center">
        <img src={props.image} class="card-img-top" alt={props.title} />
        <div class="card-body">
          <h5 class="card-title">{props.heading}</h5>
          <p class="card-text">
          {props.dec}
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
