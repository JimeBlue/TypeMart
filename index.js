"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "fanny pack";
var product = products_1["default"].find(function (product) { return product.name === productName; });
console.log(product);
