
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

function name(parameter1, parameter2, parameter3) {
    //code to be executed
}
//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
//When JavaScript reaches a return statement, the function will stop executing.

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}

myFunction(4, 3)
var x = myFunction(4, 3); 
//---------------------------------------------------------
function calculateDogAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);
//-------------------------------


function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);

//------------------------------------
var cube = function(x) {
    return x * x * x;
};


console.log(cube(5));
console.log(cube("test"));

var cube = function (x) {
 if (typeof(x) !== 'number') return true;
    return x * x * x;
};

cube('test');
//-----------------------------------------------
var w = 15;
var volume = function (w, l, h) {
    return w * l * h;
};

volume(2, 3, 4);
console.log(w);

//--------------------------------
var area = 36;

var volume = function (w, l, h) {
   area = w * l;
    console.log("Inside the function, area is " + area);
    return area * h;
};

console.log("The volume is " + volume(2, 3, 4));
console.log("Outside the function, area is " + area);
//------------------------------------------
function getMaxnumb(n1, n2){
  if (n1 < n2) {
      return n2;
  }
  else {
    return n1;
  }
}
alert(getMaxnumb(10,11));

/*var num1 = 5 ;
var num2 = 6;
var getMaxnum = function (n1, n2) {
  if (n1 < n2) {
    return n2;
  }
  else {
    return n1;
  }
};

getMaxnumb(num1,num2);
*/
function doubleMax(x, y) {
  
  return 2 * getMaxnum(x, y);
};


function getMaxnum(n1, n2) {
    if (n1 < n2) {
      return n2;
    }
    else {
      return n1; 
    }
};

console.log(doubleMax(13, 10));


