alert('Welcome to \n Basic arithmetic calculator without frontend');
alert('How it works!\n Users will be prompted to imput numbers as well as the type of operations\n\n Keys: \n* - multiplication\n - - subtraction\n + - addition\n/ - division\n% - modulus(remain of a division)');
let fNum = prompt('Enter your first number');
let sNum = prompt('Enter your second number');
let operation = prompt('Enter the type of operation you wish to perform');

calculate(operation, fNum, sNum);





function calculate(op, a, b) {
  let outcome = 0;
  a = parseInt(a);
  b = parseInt(b);
  
  if (op === '+' && !isNaN(a) && !isNaN(b)) {
    outcome = a + b;
  } 
  else if (op === '-' && !isNaN(a) && !isNaN(b)) {
    outcome = a - b;
  }
    else if (op === '*' && !isNaN(a) && !isNaN(b)) {
    outcome = a * b;
  }
    else if (op === '/' && !isNaN(a) && !isNaN(b)) {
    outcome = a / b;
  }
    else if (op === '%' && !isNaN(a) && !isNaN(b)) {
    outcome = a % b;
  }
  else {
   return alert('F A I L E D\n\nInvalid operation key or Numbers(s). Please reload page to try again.');
  }
  return alert('S U C C E S S\n\nThe result of your operation ('+a+' '+op+' '+b+') is '+outcome);
}
