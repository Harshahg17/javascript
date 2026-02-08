let obj1={
    name:"harsha",
    age: 21
} 
obj2=obj1; // obj1 one memory ref and obj2 memory ref both are same here 
obj2.name="karthik"
console.log(obj1.name) // ans is karthik because this is the pointing same memory location 

