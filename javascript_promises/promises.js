/*
    Make a promise.
    - Write your own function that returns a Promise
    - Experiment using it with the .then chaining syntax and then async/await
    - Remember to handle your rejections with style!
*/

const orderCake = () => new Promise(cakesAvailable); 
const eat = () => console.log("A cake has been sold!")
const soldOut = ({message}) => console.log(message)

let freshToday = 5

function cakesAvailable(resolve, reject){
    if (freshToday >= 1 ){
        const cake = {cakes: ["Sponge Cake", "Red Velvet", "Lemon Cake", "Fresh Cream"]}; 
        freshToday--
        resolve(cake); 
    }else{
        const error = {message: 'Sorry! All cakes are sold out'}
        reject(error); 
    }
}

// orderPizza()
//     .then(eat)
//     .catch(goHungry)

async function orderedCake(){
    try{
        const cakeM = await orderCake(); 
        eat(cakeM)
    }catch(error){
        soldOut(error)
    }
}

orderedCake()
orderedCake()
orderedCake()
orderedCake()
orderedCake()
orderedCake()
