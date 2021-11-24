import "./Main.css";
import Header from "../header/Header";
import Footer from "../foooter/Footer";
import Sidenav from "../sidenav/Sidenav";
import Subheader from "../subheader/Subheader";
function Main() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="MainBody">
          <div className="Sidenav">
            <Sidenav></Sidenav>
            <Subheader></Subheader>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Main;
