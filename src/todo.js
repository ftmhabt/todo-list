let todo = (() => {
    let todos = [];
    let container = document.querySelector('.container');
    function display() {
        clear();
        for (let i = 0; i < todos.length; i++) {
            let todoItem = document.createElement('div');
            let todoTitle = document.createElement('div');
            let todoDate = document.createElement('div');
            let todoIsDone = document.createElement('input');
            todoIsDone.type = 'checkbox';

            todoTitle.textContent = todos[i].title;
            todoDate.textContent = todos[i].dueDate;
            todoIsDone.checked = todos[i].isdone;

            todoItem.appendChild(todoTitle);
            todoItem.appendChild(todoDate);
            todoItem.appendChild(todoIsDone);
            container.appendChild(todoItem);

            todoIsDone.addEventListener('change', function () {
                todos[i].isdone = todoIsDone.checked;
            });
        }
    }
    function clear() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    return {
        add(title, description, priorty, dueDate, tag, isdone) {
            tag=tag===''?'default':tag;
            todos.push({ title, description, priorty, dueDate,tag, isdone });
            display();
            console.table(todos[0]);
        },
    };
})();

export default todo;

