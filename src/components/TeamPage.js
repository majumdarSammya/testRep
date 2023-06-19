import ProfileCard from "./profileCard";
import profilePhotoOne from "../Photos/headshot.jpeg";
import profilePhotoTwo from "../Photos/utkarsh.a.joshi.jpg";
import profilePhotoFour from "../Photos/yingying.e.chen.jpg";
import profilePhotoFive from "../Photos/chisom.mgbedike.jpg";
import profilePhotoSix from "../Photos/akinola.png";
import NavBar from "./navBar";

export default function teamPage() {
  const nameOne = "Arka Dasgupta";
  const roleOne = "Data Studio GCP Lead";
  const profilePhotoPathOne = "";
  const mailOne = "arka.a.dasgupta@accenture.com";

  const nameTwo = "Utkarsh Joshi";
  const roleTwo = "Product Owner/Data Engineer";
  const profilePhotoPathTwo = profilePhotoTwo;
  const mailTwo = "utkarsh.a.joshi@accenture.com";

  const nameThree = "Sammya Majumdar";
  const roleThree = "Full Stack Developer";
  const profilePhotoPathThree = profilePhotoOne;
  const mailThree = "sammya.majumdar@accenture.com";

  const nameFour = "Yingying Chen";
  const roleFour = "Data Engineer";
  const profilePhotoPathFour = profilePhotoFour;
  const mailFour = "yingying.e.chen@accenture.com";

  const nameFive = "Akinola Soyinka";
  const roleFive = "Infrastructure Engineer";
  const profilePhotoPathFive = profilePhotoSix;
  const mailFive = "akinola.soyinka@accenture.com";

  const nameSix = "Chisom Mgbedike";
  const roleSix = "Dashboard Developer";
  const profilePhotoPathSix = profilePhotoFive;
  const mailSix = "chisom.mgbedike@accenture.com";

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center mt-[5%]">
        <div className="max-w-screen-md">
          <div className="flex justify-evenly ">
            <ProfileCard
              props={{
                name: nameOne,
                role: roleOne,
                path: profilePhotoPathOne,
                mail: mailOne,
              }}
            />

            <ProfileCard
              props={{
                name: nameTwo,
                role: roleTwo,
                path: profilePhotoPathTwo,
                mail: mailTwo,
              }}
            />

            <ProfileCard
              props={{
                name: nameThree,
                role: roleThree,
                path: profilePhotoPathThree,
                mail: mailThree,
              }}
            />
          </div>

          <div className="flex justify-evenly">
            <ProfileCard
              props={{
                name: nameFour,
                role: roleFour,
                path: profilePhotoPathFour,
                mail: mailFour,
              }}
            />

            <ProfileCard
              props={{
                name: nameFive,
                role: roleFive,
                path: profilePhotoPathFive,
                mail: mailFive,
              }}
            />

            <ProfileCard
              props={{
                name: nameSix,
                role: roleSix,
                path: profilePhotoPathSix,
                mail: mailSix,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
