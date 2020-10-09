//-------------------REMAINDER OPERATOR------------------------

/* 

USES % TO FIND A REMAINING VALUE


var a = 10%9;
var b = 5%3;
console.log(a, b);


var colours = ["red", "yellow", "orange", "green", "purple"];

for(var i = 0; i<100; i++ ){
    console.log(i, colours[i%colours.length]);
    //console.log(i, colours[i%2]);
}


 */

//----------------------FOR LOOPS-------------------------

/*

LOOPS CAN EXECUTE A BLOCK OF CODE A NUMBER OF TIMES

use:

for(var i = 0; i<10; i++ ){
    console.log(i);
}

-------------------

var a = 10;  
a = a+1; // these are functionally the same
a++
// console.log(a);



var colour = ["red", "green", "silver", "gold", "purple", "black"];
colour.push("yellow");

for(var i = 0; i<colour.length; i++ ){
    console.log(colour[i]);
}


-------------------
 


for(var i=0; i<10; i = i+3){
    console.log(i);
}
console.log("outside of the for loop ",i);


 */

//-----------------COMPARISON OPERATORS---------------------

/* 

COMPARES VALUES AND RETURN TRUE OR FALSE
( >, <, >=, <=, ==, ===, !== )


var a = 10 == 2;
a = 10 == 10;
a = 10 == "10";
a = 10 === "10";
a = 10 != 10;
a = 10 != "1";
a = 10>=11;



console.log(a);


*/

//------------------------ARRAYS--------------------------

/*


// ARRAYS HOLD MULTIPLE VALUES IN A SINGLE VARIABLE


var favMovies = [];
favMovies.push("starwars");
favMovies[1] = "ET";
favMovies.push("Indiana Jones");
favMovies[1] = "Dune";

favMovies.push(function(){console.log("ET phone home")});
console.log(favMovies);
favMovies[3]();


//console.log(favMovies);
//console.log(favMovies[favMovies.length-1]);


console.log("My favorite movie is "+favMovies[0]);


*/

//-----------------------ARRAYS--------------------------

/*


var a = ["element1", 10, {"key": "value"}, true, undefined, function(){console.log("in the array")}];


// push adds element into the ond of the array
a.push(1010);
a.push("tenten");


// removes element from end of array.
a.pop(); //this removes "tenten"
console.log(a);


// unshift adds elements to the beginning of our array
a.unshift("this is now at the beginning");
console.log(a);
// shift removes elements from the beginning of our array
a.shift();
console.log(a);


console.log(a.length);

*/

//--------------------------------------------------------




console.log("arrays");
