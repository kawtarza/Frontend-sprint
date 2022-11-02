// For this exercise we're going to use VSCode's live-server extension, which allows us to have a running backend in a few seconds.

const bnt1 = document.querySelector('.bnt');
const body = document.body;
const ul = document.querySelector("ul");

bnt1.addEventListener('click', () => {
  ul.innerText= ""
const request= fetch ('becode.json')
  .then((response) => response.json())
  .then((data) => {
    for(element of data) {
      const li = document.createElement("li");
      li.innerText = element;
      ul.append(li);
    }  
  })
  
  },
)

// Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.



