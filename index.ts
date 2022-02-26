import products from './products';

const productName : string = "fanny pack";

const product = products.filter(product => product.name === productName)[0];

let shipping : number;

if (product.preOrder === true) {
    console.log("We will send you a message when your product is on its way.")
  }

  if (product.price === 25 || product.price > 25) {
    shipping = 0;
    console.log("This product has free shipping")
  } else if (product.price > 25) {
    shipping = 5;
   
  }