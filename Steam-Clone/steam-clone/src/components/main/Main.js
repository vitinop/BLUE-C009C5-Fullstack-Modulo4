import './Main.css';
import Header from '../header/Header';
import Footer from '../foooter/Footer';
import Sidenav from '../sidenav/Sidenav';

function Main() {
  return ( 
    <div>
      <Header></Header>
    <div className="Main">
      <div className="Sidenav">
      <Sidenav></Sidenav>
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Main;
