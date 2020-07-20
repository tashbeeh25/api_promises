/*
    Handle other people's Promises
    - Continue to experiment with hitting external APIs using fetch
    - Practice using .then chaining syntax and then async/await
    - Again, remember to handle your errors!
*/

const url = "https://api.github.com/users"; 

async function getGitData(username){
    try{
        const resp = await fetch(`${url}/${username}`);
        const jsonData = await resp.json();
        console.log(jsonData.location);
    }catch(err){
        console.warn(err);
    }
}

