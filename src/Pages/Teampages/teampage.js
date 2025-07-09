
import './Teampage.css'

import TeamCards from "../Components/Teamcard/teamcard";

import Anilimg from "../../images/image-4.jpg";
import Rahulimg from "../../images/image-5.jpg";
import Anshuimg from "../../images/image-6.jpg";
import Ramuimg from "../../images/image-8.jpg";
import Ankullimg from "../../images/image-3.jpg";

function Teampages() {
  const Data = [
    {
      Id: 0,
      Name: "Anil",
      Image: Anilimg,
      Title: "Team",
      Description: "This is a team page",
    },
    {
      Id: 1,
      Name: "Rahul",
      Image: Rahulimg,
      Title: "Team",
      Description: "This is a team page",
    },
    {
      Id: 2,
      Name: "Anshu",
      Image: Anshuimg,
      Title: "Team",
      Description: "This is a team page",
    },
    {
      Id: 3,
      Name: "Ramu",
      Image: Ramuimg,
      Title: "Team",
      Description: "This is a team page",
    },
    {
      Id: 4,
      Name: "Ankul",
      Image: Ankullimg,
      Title: "Team",
      Description: "This is a team page",
    },
  ];

  return (
    <div>
      <h1 className="text-center">Our Team</h1>
      <div className="container m-0">
        <div className="row m-0">
          {Data.map((mydata) => (
            <div className="col-md-4"  key={mydata.Id}>
              <TeamCards Data={mydata} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teampages;
