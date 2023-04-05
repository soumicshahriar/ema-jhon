import React from 'react';
import './CartReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const CartReviewItem = ({ product,handleRemoveFromCart }) => {
 const { id, img, name, quantity,price } = product;
 return (
  <div className='review-item'>
   <img src={img} alt="" />
   <div className='review-details'>
    <h4>{name}</h4>
    <p>price: <span className='orange-text'>${price}</span></p>
    <p>order Quantity: <span className='orange-text'>${quantity}</span></p>
   </div>
   <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon icon={faTrashAlt} /></button>
  </div>
 );
};

export default CartReviewItem;