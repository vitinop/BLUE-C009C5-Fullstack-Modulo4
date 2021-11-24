import './Main.css';
import Header from '../header/Header';
import Footer from '../foooter/Footer';
import Sidenav from '../sidenav/Sidenav';
import Subheader
 from '../subheader/Subheader';
function Main() {
  return ( 
    <div>
      <Header></Header>
    <div className="Main">
      <Subheader></Subheader>
      <div className="Sidenav">
      <Sidenav></Sidenav>
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Main;
