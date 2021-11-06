const personObject= {
    name:"someone",
    age:100,
    employed:true
};
// 2 sätt att skriva ut values från object

// Det ena:
console.log(personObject.age)

// Det andra:
console.log(personObject["name"])

// tar fram alla nycklarna i array form 
const keyList = Object.keys(personObject)
 console.log(keyList)

// tar fram alla värderna i list form 
keyList.map( e=> console.log(personObject[e]))

// tar fram alla värderna i array form 
const valuesList = Object.values(personObject);
 console.log(valuesList)

// tar fram alla värderna i list form 
valuesList.map( e=> console.log(e))

// tar fram allt i en array in array form 
const objectKeys_values = Object.entries(personObject);
 console.log(objectKeys_values);

/*  for .. of  */ 

//  for (const iterator of object) {
//    
//   }

//for( index, element of array ) {
//
//   }


// tar fram alla nycklarna och värderna i list form 
for( const [key, value] of objectKeys_values) {
    console.log(key, value )
}
/* 
Name : Rakib
Yrke : Lärare 
*/
