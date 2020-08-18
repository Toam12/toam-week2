// if else startments
// =====================

// let numChildren = 2
// let isCareful = false

// if(!isCareful){
// 	numChildren++
// }

// console.log(numChildren);


// let silverwareCount = 22;
// if(silverwareCount%2 !== 0){
// 	console.log("something missing")
// }


// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000


// if(performance==="good"){
// 	console.log(salary+=goodBonus)
// }else if(performance === "stellar"){
// 	console.log(salary+stellarBonus)
// }else{
// 	console.log("need more info")
// }


// const isVIP = false
// let cach = 500

// if (isVIP===true||cach>300){
// 	console.log("you can enter to this club")
// }else{
// 	console.log("i can ley you enter this club you dont have inaf money")
// }

// const a = 3
// let b = 2
// let c = 0 || 12
// let d

// b = c
// b++
// if(d){
//   b = a
// }

// d = a + (b * c)
// d++
// b += 2
// // a=3
// // b=3
// // c=15
// //
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)



// const gender = "man"
// let woman ="woman"
// let man = "man"
// let profession = "business"


// if(gender===null){
// 	console.log("sorry cant deal with that")
// }else if (gender==="woman"){
// 	console.log(woman+profession)
// }else if (gender==="man"){
// 	console.log(man+profession)
// }





//objects
//===========

// 5.1

// const reservations = {
// 	Bob: { claimed: false },
// 	Ted: { claimed: true }
//   }

//   const name = prompt('Please enter the name for your reservation');

//   let chekreservation = function(){
// 	  if(reservations[name] && reservations[name].claimed){
// 		  console.log()
// 		  console.log("wellcome Ted")
// 	  }else if (reservations[name] && !reservations[name].claimed){
// 		  console.log("someone took you spot Bob")
// 	  }else{
// 		  console.log("you have no reservation")
// 	  }
//   }


//   chekreservation()

//   5.2

// const reservations = {
// 	Bob: { claimed: false },
// 	Ted: { claimed: true }
//   }

//   const name = prompt('Please enter the name for your reservation');

//   let chekreservation = function(){
// 	  let toLowerCase1 = name.toLowerCase()
// 	  let toEditName = toLowerCase1.charAt(0).toUpperCase() + toLowerCase1.slice(1)
// 	  if(reservations[toEditName] && reservations[toEditName].claimed){

// 		  console.log("wellcome" + " " + toEditName)
// 	  }else if (reservations[toEditName] && !reservations[toEditName].claimed){
// 		  console.log("someone took you spot"  + " " + toEditName)
// 	  }else{
// 		  console.log("you have no reservation"  + " " + toEditName)
// 	  }
//   }

//   chekreservation()

// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: !true/false, // choose one
//     fridge: {
//         price: 500,
//         works: true/false, // choose one
//         items: [
// 			{ name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }

// let kitchen1 = kitchen.fridge.items[1]

// if(kitchen.hasOven && kitchen.fridge.works){
// 	console.log(`i am so happy for you ${kitchen.owner}`)
// 	}else if(!kitchen.hasOven && kitchen.fridge.works){
// 	console.log(`i am soo sad for you ${kitchen.owner}`)
// 	}else if(kitchen.hasOven && !kitchen.fridge.works){
// 		console.log(`i am so sad for you ${kitchen.owner}`)
// 	}


// loop
// ============


// 7


// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// let obj = {}
// let changeArray = function () {
// 	for (i = 0; i < names.length; i++) {
// 		obj = {
// 			name: names[i],
// 			age: ages[i],
// 		}
// 		people.push(obj)
// 	}

// }

// changeArray()
// console.log(obj)
// console.log(people)


//anther way to do this
//========================

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for (let i in names) {
// 	people.push({
// 		name: names[i],
// 		age: ages[i]
// 	})
// }


// console.log(people)




// 8


// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for (let i in names) {
// 	people.push({
// 		name: names[i],
// 		age: ages[i]
// 	})
// }


// for(i of people){
// 	console.log(`${i.name} is ${i.age} years old `)

// }



//9

// const posts = [
// 	{id: 1, text: "Love this product"},
// 	{id: 2, text: "This is the worst. DON'T BUY!"},
// 	{id: 3, text: "So glad I found this. Bought four already!"}
//   ]



// for(i in posts){
// 	if(posts[i].id === 2){
// 		console.log(posts.splice(i,1))
// 	}
// }
// console.log(posts)


const posts = [
	{
		id: 1,
		text: "Love this product",
		comments: []
	},
	{
		id: 2,
		text: "This is the worst. DON'T BUY!",
		comments: [
			{ id: 1, text: "Idiot has no idea" },
			{ id: 2, text: "Fool!" },
			{ id: 3, text: "I agree!" }
		]
	},
	{
		id: 3,
		text: "So glad I found this. Bought four already!",
		comments: []
	}
]

let obj = {}
for (i in posts) {
	console.log(posts[i])
	obj = posts[i]
	if (obj.id === 3) {
			for(i=0; i< 1; i++){
				console.log(obj.text)
				obj.splice(1,1)
			
			}
		}
	}
console.log(obj)