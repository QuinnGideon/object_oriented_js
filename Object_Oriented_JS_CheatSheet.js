/// This is an example of an object literal ///

var myCloset = {
  	sneakers: ["Nike", "Addidas", "Jordan"],
    clothes: ["winter-clothing", "summer-clothing", "work-attitre", "bum-attire"],
    hats: 4
}

// to call the above function:
myCloset.sneakers

=> [ 'Nike', 'Addidas', 'Jordan' ]





/// This is an example of a constructor function ///

function Beverage(brand, container, color){
    this.brand = brand;
    this.container = container;
    this.color = color;
}

var coke = new Beverage("Coke", "can", "red and white");
// to call the above function:
coke.container
=> 'can'

var seltzer = new Beverage("Seltzer", "can", "silver");
seltzer.color
// to call the above function:
=> 'silver'




/// Prototypical Objects ///

function Clothing(color, material, type, styling){
    this.color = color;
    this.material = material;
    this.type = type;
    this.styling = styling;
    this.outfit = function(){
    	console.log("Quinn is wearing a " + this.color + "" + this.material + "" + this.type + " outfit, and looks " + this.styling)
    }
}

Clothing.prototype.coolFactorOutOf5 = 5

var quinnsClothes = new Clothing("black and navy ,", "cotton and corduroy ", "sweater and pants", "comfy and warm");
// to call the above function:
quinnsClothes.coolFactorOutOf5 // This will allow me to access the new attributes obtained from adding the prototype
=> 5
quinnsClothes.type // This is allow me to access the "type" attributes
=> 'sweater and pants'




/// Write a method that lists the properties of a JavaScript object. ///

function Clothing(color, material, type, styling){
	this.color = color;
    this.material = material;
    this.type = type;
    this.styling = styling;
    }
}










		





