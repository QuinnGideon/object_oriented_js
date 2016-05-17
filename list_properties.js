var myClothes = {
	sweater: "black",
	sneakers: "converse",
	pants: "denim"
}

function List(objectList){
	for (var key in objectList){
		console.log(key + " is " + objectList[key]);
	}
}

List(myClothes);





