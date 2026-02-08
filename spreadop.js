// let obj1={
//     name:"harsha",
//     age: 21
// } 
// obj2=obj1; // obj1 one memory ref and obj2 memory ref both are same here 
// obj2.name="karthik"
// console.log(obj1.name) // ans is karthik because this is the pointing same memory location 

// // using spread operator we can copy real in different memory location 

// obj3={...obj1}
// obj3.name="spread"
// console.log(obj1.name)


let obj1={
     name:"harsha",
     age:"21"
}

let obj2={...obj1}
obj2.name="ravi";
console.log(obj1)
console.log(obj2)

//this about spread operator used for the making two different copies of memory 
