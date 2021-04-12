

// function sumAll(...numbers){
//     let sum=0;
//    for(number of numbers){
//        sum+=number;
//    } return sum;
// }console.log(sumAll(1,2,3,4,5))

// function sayHi(){
//  	console.log('hello');
// 	return function() {
// 	console.log('bye')
// }
// }
// setTimeout(sayHi(), 10000);

"use strict";
function perimeter(){
	console.log(this);
	return 4 * this.side ;
}
const shape = { side: 5, perimeter:perimeter };
shape.perimeter();
// what will appear in the console log? ...................................................
const myPerim = shape.perimeter;
myPerim();
// what will appear in the console log? .....................................................
// Now suppose that the "use strict" line is commented out.
myPerim();
// what will appear in the console log? .....................................................

