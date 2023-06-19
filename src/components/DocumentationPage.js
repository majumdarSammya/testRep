
import NavBar from "./navBar";
import documentation from "../documentation/Document_Extractor_Revised_2.pdf";

export default function documentationPage() {
  return (
    <div>

      <NavBar />
    <div>
      {/* <object width="100%" height="100%" data={documentation} type="application/pdf">   </object> */}
      <iframe width="100%" height="800" frameborder="0" title="documentation" src={documentation}/>
    </div>
    </div>
  );
}
