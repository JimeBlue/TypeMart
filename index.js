"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "fanny pack";
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
var shipping;
if (product.preOrder === true) {
    console.log("We will send you a message when your product is on its way.");
}
if (product.price === 25 || product.price > 25) {
    shipping = 0;
    console.log("This product has free shipping");
}
else if (product.price > 25) {
    shipping = 5;
}
