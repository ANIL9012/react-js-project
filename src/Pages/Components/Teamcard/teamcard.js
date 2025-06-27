
import './teamcard.css'

function TeamCards(props) {
  return (
    <>
      <div class="teamcard text-center">
        <img  class="teamimg" src={props.Data.Image} alt="" />
        <h1  class="teamheading text-success">{props.Data.Name}</h1>
        <h3  class="teamtitle text-info">{props.Data.Title}</h3>
        <p  class="teamdesc  text-secondary">{props.Data.Description}</p>
      </div>
    </>
  );
}

export default TeamCards;
