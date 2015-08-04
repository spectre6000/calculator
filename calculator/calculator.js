//house variables

  var shortTerm = [0];
  var longTerm = [0];
  var operation = "add";

//key definitions
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var seven = document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');
  var zero = document.getElementById('zero');
  var decimal = document.getElementById('decimal');
  var equals = document.getElementById('equals');
  var plus = document.getElementById('plus');
  var minus = document.getElementById('minus');
  var multiply = document.getElementById('multiply');
  var divide = document.getElementById('divide');
  var clear = document.getElementById('clear');
  var clear_everything = document.getElementById('clear_everything');
  
//num keys
  one.onclick = function() {
    shortTerm.push(1);
    display();
  };

  two.onclick = function() {
    shortTerm.push(2);
    display();
  };

  three.onclick = function() {
    shortTerm.push(3);
    display();
  };

  four.onclick = function() {
    shortTerm.push(4);
    display();
  };

  five.onclick = function() {
    shortTerm.push(5);
    display();
  };

  six.onclick = function() {
    shortTerm.push(6);
    display();
  };

  seven.onclick = function() {
    shortTerm.push(7);
    display();
  };

  eight.onclick = function() {
    shortTerm.push(8);
    display();
  };

  nine.onclick = function() {
    shortTerm.push(9);
    display();
  };

  zero.onclick = function() {
    shortTerm.push(0);
    display();
  };

  decimal.onclick = function() {
    if (shortTerm.indexOf(".") === -1 ) {
      shortTerm.push(".");
    } else {
      shortTerm.splice(shortTerm.indexOf("."),1);
      shortTerm.push(".");
    }
    display();
  };

//operation keys
 

  clear.onclick = function () {
    shortTerm = [0];
    longTerm = [0];
    operation = "add";
    display();
  };

  equals.onclick = function() {
    crunch();
  };

  plus.onclick = function() {
    crunch();
    operation = "add";
  };

  minus.onclick = function() {
    crunch();
    operation = "minus";
  };

  multiply.onclick = function() {
    crunch();
    operation = "multiply";
  };

  divide.onclick = function() {
    crunch();
    operation = "divide";
  };

//house functions

  var display = function(){
    
    if (shortTerm.length === 2) {
      if (shortTerm[0] === 0 ) {
        shortTerm.shift();
        document.getElementById('output').innerText = shortTerm.join("");
      } else {
        document.getElementById('output').innerText = shortTerm.join("");
      };
    } 
    else {
      document.getElementById('output').innerText = longTerm.join("");
    };
  };

  var crunch = function() {
    
    switch(operation) {
      case "add":
        var total = parseFloat(longTerm.join("")) + parseFloat(shortTerm.join(""));
        longTerm = [total];
        shortTerm = [0];
        display();
        break;
      case "minus":
        var total = parseFloat(longTerm.join("")) - parseFloat(shortTerm.join(""));
        longTerm = [total];
        shortTerm = [0];
        display();
        break;
      case "multiply":
        var total = parseFloat(longTerm.join("")) * parseFloat(shortTerm.join(""));
        longTerm = [total];
        shortTerm = [0];
        display();
        break;

      case "divide":
        var total = parseFloat(longTerm.join("")) / parseFloat(shortTerm.join(""));
        longTerm = [total];
        shortTerm = [0];
        display();
        break;
      default:

    }
    display();
  };