
import './teamcard.css'

function TeamCards(props) {
  const { Id, Name, Image, Title, Description } = props.Data;

  return (
    <div className="card p-2 m-2 text-center shadow-sm">
      <img
        className="teamimg img-fluid card-img-top"
        src={Image}
        alt={`${Name}'s profile`}
      />
      <div className="card-body">
        <h6 className="text-muted m-0 p-0">ID: {Id}</h6>
        <h5 className="text-success m-0 p-0">{Name}</h5>
        <h6 className="text-info m-0 p-0">{Title}</h6>
        <p className="text-secondary small m-0 p-0">{Description}</p>
      </div>
    </div>
  );
}

export default TeamCards;
