let greet;
let event; 
let message;

const form = document.querySelector('#myform');

const card = document.getElementsByClassName("card");

form.addEventListener("submit", handleForm); 

function handleForm(e)
{
    e.preventDefault();
    greet = e.target.greeting.value; 
    event = e.target.event.value; 
    message = e.target.message.value; 

    generateCard(greet, event, message); 
}    
   
function generateCard(greet, event, message){
    form.style.visibility = "hidden"; 
    
    const messages = document.getElementById("#info");
    const events = document.getElementById("#event");
    const greetings = document.getElementById("#greet");
    const imageLink = document.getElementById("#image");
    messages.textContent = message;
    events.textContent = event;
    greetings.textContent = greet;
    greetings.textContent = imageLink;

    const url = `https://api.unsplash.com/search/photos/?per_page=10&query=${event}&client_id=CIIE7iZ1MWxJXcg_6oNdrE_batGmHVw0uj2RJHGMAmI`;
    fetch(url).then(resp => resp.json()).then(returnImage).then(insertCard);

    
    function returnImage (images) {
        return images.results[Math.floor(Math.random() * 10)].urls.regular;
    };

    function insertCard (imageLink) {
        form.insertAdjacentHTML("afterend", ` <img src="${imageLink}">`);
  }
}





