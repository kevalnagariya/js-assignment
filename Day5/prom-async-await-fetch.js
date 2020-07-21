//fetch
// Making a get request
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"Some Title",
    body:'lorem ipsum',
}

// Make a post Request
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))



//async await

async function toDo(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

toDo();


let obj1 = {
    name:'keval',
    age:22,
    canDrive:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

//promise
const userData = new Promise((resolve,reject)=>{
    const error = false;
    if(error){
        reject("an error occured");
    }
    else{
        resolve({
            firstname:"Sachin",
            age:24,
            class:'12th',
        })
    }
});
userData
.then(data=>console.log(data))
.catch(error=>console.log(error))