// For this exercise we're going to use VSCode's live-server extension, which allows us to have a running backend in a few seconds.

const bnt1 = document.querySelector('.bnt');
const body = document.body;
const fetchName = myname => fetch('https://api.agify.io/?name='+myname)


bnt1.addEventListener('click', () => {
  fetch('https://api.agify.io/?name='+myname)
  div.innerText= ""
const request= fetch ('becode.json')
  .then((response) => response.json())
  .then((data) => {
    for(element of data) {
      const div = document.createElement("div");
      li.innerText = element;
      ul.append(li);
    }  
  })
  
  },
)

// Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.



const body1 = document.querySelector('body')

const button = document.createElement('button')
body1.appendChild(button)
button.innerText= "click"

let user_input = document.getElementById('user_input');

button.addEventListener('click',() => {
    const name = user_input.value
    if (name.length === 0){
        // string is empty
        throw "No user input!"
    }
    else{
        const div = document.createElement("div");
        body1.appendChild(div)

        fetch('https://api.agify.io/?name='+name)
        .then(response => response.json())
        .then(json => {
            div.innerHTML = JSON.stringify(json)
            // console.log(json.name)
            // console.log(json.age)
        })
        .catch(error => {
        console.log('Fetch gives error: ',error)
        });
    }
});