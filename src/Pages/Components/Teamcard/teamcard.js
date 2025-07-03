
import './teamcard.css'

function TeamCards(props) {
  return (
    <>
      <div className="teamcard card h-100 text-center">
        <img  className="teamimg img-fluid" src={props.Data.Image} alt="" />
        <h1  className="teamheading text-success">{props.Data.Name}</h1>
        <h3  className="teamtitle text-info">{props.Data.Title}</h3>
        <p  className="teamdesc  text-secondary">{props.Data.Description}</p>
      </div>
    </>
  );
}

export default TeamCards;
