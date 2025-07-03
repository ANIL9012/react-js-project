import { data } from "react-router-dom";

import TeamCards from "../Components/Teamcard/teamcard";

import Anilimg from "../../images/image-4.jpg";
import Rahulimg from "../../images/image-5.jpg";
import Anshuimg from "../../images/image-6.jpg";
import Ramuimg from "../../images/image-8.jpg";
import Ankullimg from "../../images/image-3.jpg";
function Teampages() {
  let Data = [
    {
      Id: 0,
      Name: "Anil",
      Image: Anilimg,
      Title: "Team",
      Description: "This is a team pagaes",
    },

    {
      Id: 1,
      Name: "Rahul",
      Image: Rahulimg,
      Title: "Team",
      Description: "This is a team pagaes",
    },

    {
      Id: 2,
      Name: "Anshu",
      Image: Anshuimg,
      Title: "Team",
      Description: "This is a team pagaes",
    },

    {
      Id: 3,
      Name: "Ramu",
      Image: Ramuimg,
      Title: "Team",
      Description: "This is a team pagaes",
    },

    {
      Id: 4,
      Name: "Ankul",
      Image: Ankullimg,
      Title: "Team",
      Description: "This is a team pagaes",
    },
  ];
  return (
    <>
      <div>
        <h1 className="text-center"> our team</h1>
        <div className="container">
          <div className="row g-3 m-2">
            {Data.map((mydata, ind) => (
              <div className="col-md-4">
                <TeamCards key={mydata.Id} Data={mydata} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teampages;
