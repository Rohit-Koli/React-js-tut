

// We have to use asynchronous and await both to handle the api data or to send data

//Settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully
async function getData(){
    //this is the get method 
    // let x=await fetch('https://reqres.in/api/users?page=12') //We nedd to call await 2 times
    let x=await fetch('https://reqres.in/api/users',{
        method:'POST',
        body:JSON.stringify({
            name:'Rohit',
            job:'leader',
            id:122
        })
    })
    let data= await x.json()
    return data
}
console.log(getData())