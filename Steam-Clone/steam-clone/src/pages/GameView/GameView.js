import "./GameView.css";
import { FaRegHeart } from 'react-icons/fa';

export default function Game() {

  return(
    <div className='game'>
      <div className='game-header'>
        <img src='' alt='' />
      </div>

      <div className='game-wish'>
        <h2>''</h2>
        <div className='game-like'>
          <span>R$ ''</span>
          <a href='!#'>
            <FaRegHeart />
          </a>
        </div>
      </div>
      <h3>''</h3>
      <p>''</p>

    </div>
  )
}