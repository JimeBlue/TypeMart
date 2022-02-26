import products from './products';

const productName : string = "fanny pack";
const product = products.filter(product => product.name === productName)[0];
let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;
const shippingAdress : string = "Elsenheimerstrasse 100, Munich, Bayern";

if (product.preOrder === true) {
    console.log("We will send you a message when your product is on its way.")
  }

  if (product.price === 25 || product.price > 25) {
    shipping = 0;
    console.log("This product has free shipping")
  } else {
    shipping = 5;
  }

  if (shippingAdress.match("Bayern")) {
    taxPercent = .05;
  }else {
    taxPercent = 0.1;
  }

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(total);
  