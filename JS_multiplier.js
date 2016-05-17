// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. getCurrentValue should return the last answer returned from multiply.



function Multiplier(number){
	this.number = number,
	this.currentNum = 1,
	this.multiply = function(){
		this.currentNum = this.currentNum * this.number;
		console.log(this.currentNum)
	};
	this.getCurrentValue = function(){
		console.log(this.currentNum)
	};
}
var newNumber = new Multiplier(5);
newNumber.multiply();
newNumber.multiply();
newNumber.multiply();
newNumber.multiply();
var numNum = new Multiplier(4)
numNum.multiply();
numNum.multiply();
numNum.multiply();

newNumber.getCurrentValue();