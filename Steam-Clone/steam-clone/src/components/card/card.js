import './card.css';
import { FaRegStar } from 'react-icons/fa';

export default function Card(props) {

  return (
    <div className='card'>
      <div className='card-item'>
        <div className='card-image'>
          <img src={props.image} alt={props.name}></img>
        </div>
        <h2 className='card-title'>{props.name}</h2>
        <span className='card-preco'>{'R$ ' + props.preco}</span>
      
      </div>
      <button className='wishlist'>
        <FaRegStar />
      </button>
    </div>
  )
}