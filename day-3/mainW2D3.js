// ========================================================================
// CALLBACK FUNCTION
// ========================================================================							


// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()
// ===============================================================================
// FIX
// ===============================================================================				

// let users = []

// const getData = function (callBack) {


// 	setTimeout(function () {
// 		users = [{ name: "Rick" }, { name: "Morty" }]
// 		console.log("Got users")
// 		callBack()
// 	}, 3000);
// }

// const displayData = function () {
// 	console.log("Going to display: " + users)
// 	for (user of users) {
// 		console.log(user.name)
// 	}
// }

// getData(displayData)
// // displayData()

// =======================================================================================
// REWRITE
// =======================================================================================										
// const timer = function(){
// 	console.log(new Date())
//   }

//   setInterval(timer, 1000)



// setInterval(function(){
// 	console.log(new Date())
//   }, 1000)


// ===============================================================================
// ARROW FUNCTION
// ===============================================================================


// const square = number => number*4
// console.log(square(4))

// OR
// ======

// const square = number => number*number
// console.log(square(4))  

// ====================================================================
// A LITTEL COMPLEX ARROW FUNCTION
// ====================================================================				 
// const getHypotenuse = (a, b) => {
// 	const aSquared = a * a
// 	const bSquared = b * b
// 	const cSquared = aSquared + bSquared
// 	return Math.sqrt(cSquared)
//   }

//   const hypoteneuese = getHypotenuse(3, 4) 
//   console.log(hypoteneuese ) //prints 5

// ====================================================================
// SPOT CHECK 5
// ====================================================================				



// const getFormalTitle = (name, name1) => name + " " + name1
// const formaTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formaTitle)

// OR
//========

// const getFormalTitle = (name,name1) => {
// 	return name +" " + name1
// }
// const formaTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formaTitle)





// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

// ================================================================================
//    THE DIFFRENS BETWEEN THE THIS IN ARROUW FUNCTION AND A REGLULAR FUNCTION 
// ================================================================================


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

// 		console.log("You are going to see the name in 3 seconds...")
// 		console.log(this)

// 		setTimeout(function () { //normal function
// 			console.log(this)
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()
// The suspenseBuilder object has two keys: a name string and a displayName method.
// The displayName method has a console log, then sets a timeout to wait 3 seconds before console logging this.name - wild suspense here.
// However.. With regular functions, this is the object that called the function - but who called that callback function in setTimeout? No one called it o_o
// Therefore, since "no one" called the function, this will just be the general window object, and this.name will be undefined.



//  Arrow functions save the day. If we rewrite the callback as an arrow function, like this:
// ===========================================================================================

// NOW THE (THIS) IS THE OBJECT ITSELF LIKE THE FUNCTION
// ==========================================================


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

// 		setTimeout(() => { //this is the change
// 			console.log(this)
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()



// Then this works as expected!
// This works because in arrow functions, this is determined by lexical scope. That just means that it doesn't matter who called the function, but rather where it was called - the context of the function.
// In this case, the callback function was called inside suspenseBuilder, and as such this will equal suspenseBuilder!
// Another way to think of lexical scope is simply as the "regular scope". Remember that inner-functions (like the callback) will always have access to the scope of outer functions ( like displayName ). Therefore, whatever this is inside of displayName will apply to the callback as well.



// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: () => {

// 		console.log("You are going to see the name in 3 seconds...")
// 		console.log(this)

// 		setTimeout(() => { //this is the change
// 			console.log(this)
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()



//  mainW2D3.js:173 Uncaught SyntaxError: Identifier 'suspenseBuilder' has already been declared (importent)
// ==============================================================================================





// ==============================================================================================
//                                          EXERCISES
// ==============================================================================================


//1

// const push = function (callback) {
// 	console.log("pushing it!")
// 	callback()
//   }

//   const pull = function () {
// 	console.log("pulling it!")
//   }
//   //pushPull(push)          //should print "pushing it!"
//   const pushPull = push
//   pushPull(pull)            //should print "pulling it!"



//2



// const returnTime = function (time) {
// 	time =new Date
// 	alert('The current time is: ' + time)
//   }

// const getTime = (callBackGetTime)=>{
// 	console.log("i will invok")
// 	callBackGetTime()

// }

// getTime(returnTime)



// //3
// debugger;
// const logData = function(data){
// 	alert(data)

// }
// const displayData = function (alertDataFunc, logDataFunc, data) {

// 	alertDataFunc(data);
// 	logDataFunc(data);
// };

// displayData(alert, logData, "I like to party")


// //alertDataFunc//return alert(data="i like to party")
// //logDataFunc// return alert(data = "i like to party")



//4
//Create an arrow function that receives three parameters and returns their sum - it should be one line.

// const sum = (a,s,d) => a+s+d
// console.log(sum(10,4,6))



//5

//Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:




// const capitalize = name => name.toUpperCase()
// console.log(capitalize("bob"))
// console.log(capitalize("rOn"))
// console.log(capitalize("DAy"))



//6


// const determineWeather = temp => {
// 	if(temp > 25){
// 	  return "hot"
// 	}
// 	return "cold"
//   }



//  commentOnWeather = determineWeather

// console.log(commentOnWeather(0))



// ===============================================================================
// Closures & Modules
// ===============================================================================


// const methOperations = function(){
// 	const add = (x, y) =>{
// 		return x+y
// 	}
// 	return add
// }

// const meth = methOperations()
// console.log(meth(1,2))






//const setCounter = function (num) {
//	let counter = 0
//  
//	const count = function () {
//	  counter += num;
//	  console.log(counter)
//	}
//  
//	return count
//  }
//  
//  const increment = setCounter(2)
//  increment()//2
//  increment()//4
//  increment()//6
//  increment()//8
//  increment()//10
//  increment()//12
//  increment()//14



// const family = function(){
// 	let members = []
// 	const birth =(name)=>{
// 			members.push(name)
// 			console.log(members)
// 	}
// 	return birth
// }

// giveBirth = family()
// console.log(giveBirth(2))
// console.log(giveBirth("elis"))
// console.log(giveBirth(true))
// console.log(giveBirth(true/false))

// const methOperations = function(){
// 	const add = (a, b)=> a - b

// 	const subtract  = (a, b)=> a + b

// 	const multiply = (a, b)=> a * b

// 	const divide  = (a, b)=> a / b

// 	return{
// 		add,
// 		subtract,
// 		multiply,
// 		divide,
// 	}
// }

// const meth = methOperations();
// console.log(meth.add(3,4))
// console.log(meth.subtract(3,4))
// console.log(meth.multiply(3,4))
// console.log(meth.divide(10,5))

// const methOperations = function(){
// 	const subtract  = (a, b)=> a + b
// 	const multiply = (a, b)=> a * b
// 	const divide  = (a, b,c)=> a*(b / c)

// 	return{
// 		subtract,
// 		multiply,
// 		divide,
// 	}	
// }

// const meth = methOperations();
// console.log(meth.subtract(13,29))
// console.log(meth.multiply(1.75,24))
// console.log(meth.divide(7,36,6))
// console.log(meth.multiply(7,meth.divide(36,6)))




// const UsersModule = function () {
//     const  _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//          _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of  _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
// 		listUsers: listUsers,

// 	}

// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('TOAM')
// usersModule.addUser('COHEN')
// usersModule.listUsers()



// debugger;
// const foo = function () {
// 	const x = 1

// 	const bar = function () {
// 	  console.log(x) //notice this inner function using the outer function's variable
// 	}

// 	return bar
//   }

//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!


// debugger;
// const StringFormatter = function () {

// 	const capitalizeFirst = name => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)

// 	const skewerCase = name => name.replace(/\s/g, "-")

// 	return {
// 		capitalizeFirst,
// 		name,
// 		skewerCase
// 	}
// }
// const string = StringFormatter()
// string.skewerCase("hello world i know that you hear me out")
// string.capitalizeFirst("hello")

debugger;
const money = function(){
	const bank = 500
	const depositCash = increase =>{ 
		return bank1 + increase
		
	}
	const showBalance = (show, ) => show = bank + bank1

 	return{
		depositCash,
		showBalance,
	}
	
}	

const m = money()
console.log(m.depositCash(250))
console.log(m.showBalance(250))


