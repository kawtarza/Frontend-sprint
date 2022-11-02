// Allow user to create tasks. Tasks should have a name, a description and a due date
// Allow users to label their tasks with a status (ex: to do, doing, done)

const addTasks = document.querySelector(".btnadd");
const subject = document.querySelector(".subject");
const editTask = document.querySelector(".editTask")
const description = document.querySelector(".description");
const date = document.querySelector(".date");
const statut = document.querySelector(".status");

addTasks.addEventListener('click', () => {
  // créer une nouvelle div (newDiv)
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  editTask.appendChild(newDiv);
 

  //Subject//
 
  const cardSubject = document.createElement("h4");
  newDiv.appendChild(cardSubject);
  //print
  cardSubject.innerHTML = "Subject : " +  document.querySelector(".subject").value;


   //Description//
	const cardDescription = document.createElement("p")
	newDiv.appendChild(cardDescription)
	//print
	cardDescription.innerHTML = " Description : " + document.querySelector(".description").value


// // DATE 
	

	const cardDate= document.createElement("p")
	newDiv.appendChild(cardDate)
	let date = document.querySelector('.date')
	cardDate.innerHTML = "Date : " + date.value

	// / STATUS
	// creer element carName & relier a divCart
	const cardStatus = document.createElement("p")
	newDiv.appendChild(cardStatus)
	// recup la valeur de l'input et le faire apparaitre
	cardStatus.innerHTML = "Status : " + document.querySelector(".status").options[document.querySelector(".status").selectedIndex].text
  
})

