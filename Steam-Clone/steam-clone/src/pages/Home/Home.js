import "./Home.css";
import Sidenav from "../../components/sidenav/Sidenav.js";
import Subheader from "../../components/subheader/Subheader.js";
import Slidermain from "../../components/slidermain/Slidermain.js";
import Subfooter from "../../components/foooter/Subfooter";
export default function Home() {
  return (
    <div>
      <main>
        <div className="TotalBody">
          <div className="Sidebody">
            <Sidenav></Sidenav>
          </div>
          <div className="MainBody">
            <Subheader></Subheader>
            <div className="SliderSection">
              <Slidermain/>
            </div>
          </div>
        </div>
        <Subfooter/>
      </main>
    </div>
  );
}
