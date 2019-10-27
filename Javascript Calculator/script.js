let number1 = '';
let number2 = '';
let operator = '';
let final = '';

// Display the result in real time
function display(){
document.querySelector('.display').value = number1 + operator + number2;
	if(number1 && operator && number2){
		 switch(operator) {
 case "+":
 document.querySelector('.result').value = '= '+String(parseFloat(number1)+parseFloat(number2));
 break;
 case "-":
 document.querySelector('.result').value = '= '+String(parseFloat(number1)-parseFloat(number2));
 break;
 case "*":
 document.querySelector('.result').value = '= '+String(parseFloat(number1)*parseFloat(number2));
 break;
 case "/":
 document.querySelector('.result').value = '= '+String(parseFloat(number1)/parseFloat(number2));
 break;
 case "^":
 document.querySelector('.result').value = '= '+String(parseFloat(number1)**parseFloat(number2));
 break;
        		}
	}
	else {
	 document.querySelector('.result').value = '';
	
	}
}


// Delete
document.querySelector('.deleteButton').addEventListener('click',function(){
	// If there is only number1, delete 1 digit of number1
	if (number1 && !operator && !number2){
		number1 = number1.substring(0, number1.length-1)
	}
	// If there is an operator and no second number, delete the operator
	if (operator && !number2){
		operator = '';
	}
	// If there is an operator and second number, delete 1 digit of second number
	if (operator && number2){
		number2 = number2.substring(0, number2.length-1)
	}
	display();
})
// AC  = Reset
document.querySelector('.reset').onclick = function(){
	// If there is a whole operation with n1 n2 and operator, show it in history
	if(number1 && operator && number2){
document.querySelector('.history').value = number1 +' '+ operator+' '+ number2+' '+ document.querySelector('.result').value
	}
	number1 = '';
	number2 = '';
	operator = '';

	display();
}
// Zero
document.querySelector('.zero').onclick = function(){
// If number1 is not a single zero and we are still editing number1(that means no operator defined yet),you can add a 0 to number1
if (number1 !='0' && !operator){
	number1 += '0';
}

if (number1 && operator && (number2!=0 | number2.startsWith('0.') | !number2)){
	number2 += '0';
}

	display();
}
// Comma
document.querySelector('.comma').onclick = function(){
	// If we haven't entered any digit for number 1, you can't add a comma as first digit
if (!number1){
}
// If there is a number1 and operator and number2 doesnt already have any comma,add a comma when pressing the button
if (number1 && operator && number2 && !number2.includes('.')){
	number2 += '.'
}
// If there is a number 1 and it doesnt have a comma and we are still editing number1(that means there is no operator yet) we can add a comma to number1 when pressing a button
if (number1 && !number1.includes('.') && !operator){
	number1 += '.'
}
	display();
}

// Sum
document.querySelector('.sum').onclick = function(){
	if(number1){
	operator = '+';
	}
	display();
}
// Substract
document.querySelector('.substract').onclick = function(){
	if(number1){
	operator = '-';
	}
	display();
}
// Multiplication
document.querySelector('.multiply').onclick = function(){
	if(number1){
	operator = '*';
	}
	display();
}
// Division
document.querySelector('.divide').onclick = function(){
	if(number1){
	operator = '/';
	}
	display();
}
// Power
document.querySelector('.power').onclick = function(){
	if(number1){
	operator = '^';
	}
	display();
}
// Inverse
document.querySelector('.inverse').onclick = function(){
	if(number1 && !number2){
	number1 = -number1;
	}	
	if(number1 && number2){
	number2 = -number2;
	}
	display();
}


// Eventlistener for number buttons that makes adds to the current displayer number
for(let i=0;document.querySelectorAll('.numberButton').length;i++){
	document.querySelectorAll('.numberButton')[i].addEventListener('click',function(){

		if(operator && this.innerHTML != '+/-'){
			number2 += this.innerHTML
			if (number2.startsWith('0') && !number2.startsWith('0.')){
			number2 = number2.substring(1, number2.length)
			}
		}
		else{
			number1 += this.innerHTML
			if (number1.startsWith('0') && !number1.startsWith('0.')){
			number1 = number1.substring(1, number1.length)
			}		
	}
		display();
	})
}

