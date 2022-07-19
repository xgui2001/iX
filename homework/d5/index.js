/*const taskArray = [
    {Task: 'Get enough sleep', Action: 'No less than 8 hours'},
    {Task: 'Drink water', Action: 'About 11.5 cups (2.7 liters) of fluids a day'},
    {Task: 'Eat food', Action: 'Set aside time for eating'},
    {Task: 'Exercise', Action: 'Set aside time for gym'},
    {Task: 'Finish homework', Action: 'Stop procrastinating and use pomodoro technique'},
    {Task: 'Do laundry', Action: 'Once per week is ideal'},
    {Task: 'Practice coding', Action: 'Practice makes perfect!'}
]
*/


class Task{
    constructor(title){
        this.title = title;
    }
}

class UI{
    constructor(){
        this.taskInput = document.getElementById('task-input');
        this.buttonInput = document.getElementById('button-input');
        this.tableBody = document.getElementById('table-body');
    
        this.tasks = [];
    }

bindEventListeners() {
    this.buttonInput.addEventListener('click', (e) =>{
        this.handleButtonClick(e);
    })
}

handleButtonClick(event){
    event.preventDefault();

    const task = new Task(
        this.taskInput.value,
    );
    
    //add task value 
    this.tasks.push(task);

   //clearing previous input 
    this.taskInput.value = '';

    this.populateTaskTable();
}
    populateTaskTable(){
        this.tableBody.innerHTML = '';

        const completeButton = document.createElement('button');
        completeButton.classList.add('btn-sucess');

        for (let task of this.tasks){
            const row = document.createElement('tr');
            const taskCell = document.createElement('td');
            const completeCell = document.createElement('td');

            row.append(taskCell);
            row.append(completeCell);
        
            this.tableBody.append(row);

            taskCell.innerHTML = task.title;
            completeCell.innerHTML = completeButton;

        }
    }
}

const ui = new UI();
  ui.bindEventListeners();