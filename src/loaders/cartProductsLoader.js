import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =async()=>{
 const laodedProducts = await fetch('products.json');
 const products =await laodedProducts.json();

// if cart data is in database, you have to use async await
const storedCart = getShoppingCart();

const savedCart = [];
for(const id in storedCart){
 const addedProduct = products.find(pd=>pd.id===id);
 if(addedProduct){
  const quantity = storedCart[id];
  addedProduct.quantity = quantity;
  savedCart.push(addedProduct)
 }
}
return savedCart;
// if you need to send two things
// return [products, savedCart]
// another option
// return {products,savedCart}
 
}

export default cartProductsLoader;