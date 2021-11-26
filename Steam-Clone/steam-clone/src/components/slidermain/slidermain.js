import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slidermain.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Slidermain(props) {
  const[game,setGame] = useState([]);
  const [mounted,setMounted]=useState(false);

  const getData= async()=>{
    await axios.get(`/game/find/${props.id}`)
    .then (response=>{
      if(mounted){
      setGame(response.data)
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
    <div className="SliderBlockMaster">
      <div>
        <div className="SliderDestaque">
          <Carousel
            width="600px"
            height="337px"
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={game.image} alt={game.name} />
            </div>
           
            <div>
              <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
            </div>
            <div>
              <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
            </div>
            <div>
              <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
            </div>
          </Carousel>
          <div className="SliderGameInfo">
            <h1> {props.name}</h1>
            <div className="SliderGameImgs">
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
            </div>
            Valor
          </div>
        </div>
      </div>

      
      
      
    </div>
  );
}

export default Slidermain;
