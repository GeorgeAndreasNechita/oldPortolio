function roundLastRow(){
	let lastImg = document.querySelector('.frame').lastElementChild.lastElementChild;
	let lastCheckbox = document.querySelector('.frame').lastElementChild.firstElementChild;
	lastCheckbox.classList.add('border-radius-left')
	lastImg.classList.add('border-radius-right')
}
roundLastRow()

// Function that resets the border radius of the checkbox
function removeBorderLeft(){
	let checkboxSelector = document.querySelectorAll('.checkbox');
	for (var i = 0; i < checkboxSelector.length; i++) {
		checkboxSelector[i].classList.remove('border-radius-left')
	}
}
// Function that resets the border radius of the division with the trashcan
function removeBorderRight(){
	let checkboxSelector = document.querySelectorAll('.remove-task');
	for (var i = 0; i < checkboxSelector.length; i++) {
		checkboxSelector[i].classList.remove('border-radius-right')
	}
}

// Add a task row when you click the + 
let newTask = document.querySelector('.plus')
newTask.addEventListener('click',function(){
		if (document.querySelector('.task-name').value == ''){
		alert('You need to write a task');
		return
	}
	// Remove border-radius from the last row
	removeBorderLeft()
	removeBorderRight()
	// New row division
	let newTaskDiv = document.createElement('div')
	newTaskDiv.classList.add('task','row');
	document.querySelector('.frame').appendChild(newTaskDiv);
	// Checkbox
	let newTaskDiv1 = document.createElement('div');
	let newInput = document.createElement('input');

	newTaskDiv1.classList.add('checkbox');
	newInput.classList.add('input-checkbox');
	newInput.setAttribute('type', 'checkbox');
	newTaskDiv1.appendChild(newInput);
	newTaskDiv.appendChild(newTaskDiv1);
	// Div with task 
	let newTaskDiv2 = document.createElement('div');
	newTaskDiv2.classList.add('task-text');
	newTaskDiv2.innerHTML = document.querySelector('.task-name').value;
	newTaskDiv.appendChild(newTaskDiv2);

	document.querySelector('.task-name').value = '';
	// Div with trash icon to delete
	let newTaskDiv3 = document.createElement('div');
	let trashImage = document.createElement('img');
	newTaskDiv3.classList.add('remove-task','add-remove');
	trashImage.classList.add('minus');
	trashImage.setAttribute('src','img/trash.svg');
	trashImage.setAttribute('alt','trash');

	newTaskDiv3.appendChild(trashImage);
	newTaskDiv.appendChild(newTaskDiv3);
	// Add eventListener to the checkbox so it crosses the task text
	newInput.addEventListener('click', function() {
		newTaskDiv2.classList.toggle('linethrough');
	})
// Add eventListener for the trash icon to remove the row
trashImage.addEventListener('click', function() {
	this.parentNode.parentNode.remove();
	})
// Function that rounds the checkbox and the trashcan divisions
	roundLastRow();
})

// Lister for checkbox that strikes the task if its marked as completed
function addListenerCheckbox(){
	let checkbox = document.querySelectorAll('.input-checkbox');
	for (var i = 0; i < checkbox.length; i++) {
		checkbox[i].addEventListener('click', function() {
			this.parentElement.nextElementSibling.classList.toggle('linethrough')
		})
	}
}
addListenerCheckbox()

function removeTask(){
	let trashImage = document.querySelectorAll('img');
	for (var i = 0; i < trashImage.length;i++){
		trashImage[i].addEventListener('click',function(){
			this.parentNode.parentNode.remove();

		})
	}
}
removeTask()
