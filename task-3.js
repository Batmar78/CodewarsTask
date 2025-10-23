// Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  return +(2 * Math.PI * circle.radius).toFixed(6);
}

// Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
  const result = [];
  for (let key in obj) {
    if (key.length === 5) result.push(key);
    if (obj[key].length === 5) result.push(obj[key]);
  }
  return result;  
}

// Understanding closures - the basics
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n){

	const arrFunc = []

	for (let i = 0; i< n; i++){
		arrFunc.push(function(){
			return i;
		})
	}
	return arrFunc
}