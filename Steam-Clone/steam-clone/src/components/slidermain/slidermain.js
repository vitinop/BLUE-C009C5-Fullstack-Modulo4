import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slidermain.css";
function Slidermain() {
  return (
    <div className="SliderBlockMaster">
      <div>
        Destaques e Recomendados
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
              <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
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
            <div>
              <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
            </div>
          </Carousel>
          <div className="SliderGameInfo">
            <h1> Título do Game</h1>
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
            Gênero
          </div>
        </div>
      </div>

      
      
      
    </div>
  );
}

export default Slidermain;
