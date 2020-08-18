// //===================================================================================
// //Section 1
// //===================================================================================
// const run = true

// if (run) {
// 	let distance = 8
// 	for (var i = 0; i < distance; i++) {
// 		console.log("running")//(8)running
// 	}
// 	console.log("Finished running " + distance + " miles")//Finished running 8 miles
// }


// console.log("Damn, you see this gal? She ran " + distance + " miles") //  distance is not defined



// // run is a global scope so he can be anywhere in the document but distance is a local scope that reference to the if condition so the first and the second console.log will work but the lest one is out of this function and he only can reference to the golbal scopes so that why hhe return error

// //===================================================================================//Section 2//===================================================================================
// if (13 == "space") {//false....
// 	let cowSound = "moo"
// }
// else {
// 	console.log("Cow says " + cowSound)//cowSound isnt defined 
// }

// //the first if statment is false so he will not be avilibale to show but that not popup error or undefined but the else statment is refernce to varble that dosent exsist in his scope so he will popup  error because cowSound is a local scope and it only refernce to the if statment

// //===================================================================================
// //Section 3
// //===================================================================================
// const serveOrders = function (orders) {

// 	for (let order of orders) {
// 		let specialOrder = "special " + order
// 		console.log("Served a " + specialOrder)
// 	}

// 	console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)//allOrders array  will be manipulated with the serveOrders
// //serveOrders is a golobal scope and inside of it we have a for-of loop that loop trough the parmeter and inside of this for-of loop we have another varble a local varble that refercnce to the for of loop that we have made 
// //we console log the will inside of our for-of loop that why that will work for now 
// //and we console log again but this time the console log it outside the for-of loop but inside the function and 
// //and it console log the parameter of the function and that good because the parmeter is a local scpoe of this function and he refernce to it which this good 

// //===================================================================================
// //Section 4
// //===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
// 	const seed = "brown seed"
// }

// const plant = function () {
// 	getSeed()
// 	console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()//see and put is not defined 
// // pot is a global scope, we have 2 fucntions and inside the first fucntion we have a varble that he is a local scpue of this fucntion and in the other fucntion we execution the fucntion that is ok but we cnat use the local scope "seed " because he is not defined in the second fucntion  
// //===================================================================================
// //Section 5 - Optional(if you have time)
// //===================================================================================
// const doesUserExist = function (name) {
// 	let found =false
// 	const users = [
// 		{ name: "Shapira", age: 19 },
// 		{ name: "Lucius", age: 23 }
// 	]
// 	for (let u of users) {
// 		if (u.name == name) {
// 			 found = true
// 		}

// 	}
// 	return found//is not defined
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
// 	console.log("We found the ragamuffin!")//it will not
// }
// else {
// 	console.log("No idea where this person is.")//it will
// }

// //we have a function and inside of this funciton we have a new array that we 2 object inside of he 
// //the new array is a local scope that refernce only to his fucntion, inside the fucntion we have a for-of loop that refernce to the aaray that we have inside the function (new array) wich that good ! but indise of this loop we have a if statment taht says if u.name equols to name(==) so cons found = true....
// //===================================================================================
// //Section 6 - Optional (if you have time)
// //===================================================================================
// let isEnough = false

// const makeEnough = function () {

// 	for (let i = 0; i < 10; i++) {
// 		if (i > 5) {
// 			isEnough = true//4 time true 
// 			console .log(isEnough)
// 		}
// 	}
// }

// makeEnough()
// if (isEnough) {
// 	console.log("Finally, sheesh") //it will
// }
// else {
// 	console.log("Here we go again...")// undefined
// }



// //this is the object that invoke the function impotent  












// =================================================================================================
// (THE KEY-WORD THIS)
//==================================================================================================




// const counter = {
// 	count: 0,
// 	updateCounter: function(){
// 		this.count += 1;
// 	}
// };


// counter.updateCounter()
// counter.updateCounter()
// counter.updateCounter()

// alert(counter.count);




// const makeNoiseFunction = function(){
// 	alert(this.noise);
// }

// const cat = {
// 	makeNoise: makeNoiseFunction,
// 	noise:"Meow!",
// };

// const dog = {
// 	makeNoise: makeNoiseFunction,
// 	noise:"Woof",
// };


// cat.makeNoise()
// dog.makeNoise()


// const person = {
// 	username: "Felicia",
// 	introduce: function(){
// 	console.log(`Hi, I'm ${this.username}`)
// 	}
//   }

//   person.introduce() //prints "Hi, I'm Felicia"




//   const person = {
// 	hungry: true,

// 	feed: function () {
// 	  if (this.hungry) {
// 		this.hungry = "hungry";
// 		alert(`'Im no longer ${this.hungry} !`)
// 	  }
// 	}
//   }

//   person.feed() //should alert "I'm no longer hungry"



// const pumpFuel = function (plane) {
// 	plane.fuel += 1;
// };

// const airplane = {
// 	fly: function () {
// 		if (this.fuel < 2) {
// 			return 'on the ground!';
// 		}
// 		else {
// 			return 'flying!';
// 		}
// 	}
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());



const tipJar = {
	coinCount: 20,
	tip: function () {
	  this.coinCount += 1;
	},
	stealCoins: function (a){
		this.coinCount -= a

	}
};
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
  