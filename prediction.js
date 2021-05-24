alert("model loaded");
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var model;
var predResult = document.getElementById("result");
async function initialize() {
   const model = await tf.loadLayersModel('https://github.com/Ishita-Parashar/Xray-detection/blob/main/model.json');
   alert("done");
}
async function predict() {
  // action for the submit button
let image = document.getElementById("img")  
let tensorImg =   tf.browser.fromPixels(image).resizeNearestNeighbor([150, 150]).toFloat().expandDims();
  prediction = await model.predict(tensorImg).data();
if (prediction[0] === 0) {
      predResult.innerHTML = "I think it's a cat";
} else if (prediction[0] === 1) {
      predResult.innerHTML = "I think it's a dog";
} else {
      predResult.innerHTML = "This is Something else";
  }
}
initialize();
