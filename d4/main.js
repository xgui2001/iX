console.log("Hello");

const row = document.getElementById('angela-row');
console.log(row);

const rows = document.getElementsByTagName('td');
console.log(rows);

const names = document.getElementsByClassName('name');
console.log(names);

//Dom tree traversal: each element has a children
console.log(document.children[0].children);

//Dom tree traversal: each element has a parent (other than document)
console.log(row.parentElement);

//Create/editing and removing element

const tableBody = document.getElementById('table-body');

const newRow = document.createElement('tr');
const nameCell = document.createElement('td');
const surnameCell = document.createElement('td');

nameCell.innerHTML = 'Jane';
surnameCell.innerHTML = 'Doe';

newRow.append(nameCell);
newRow.append(surnameCell);

tableBody.append(newRow);

//addeventlistener
const removeButton = document.getElementById('remove');

removeButton.addEventListener('click', (event) => {
    console.log(event);
    event.target.parentElement.parentElement.remove();
})

tableBody.addEventListener('mousemove', (event)=>{
    console.log(event);
})

tableBody.classList.add('grey');

console.log(tableBody.getAttribute('id'));

tableBody.setAttribute('name','something different');


//event bubbling
tableBody.addEventListener('click',(event)=>{
    event.stopPropagation();
})

const savedText = localStorage.getItem('text');
if (savedText){
    input.value = savedText;
}

//local storage
const input = document.getElementById('text-input');
input.addEventListener('change', (event)=>{
    //console.log(input.value);
    localStorage.setItem('text',input.value);
})
