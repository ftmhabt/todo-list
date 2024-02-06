let todo = (() => {
    let todos = [];
    return {
        add(title, description, priorty, dueDate, tag, isdone) {
            todos.push({ title, description, priorty, dueDate, tag, isdone });
        },
        get(name){
            let holder=[];
            for (let i = 0; i < todos.length; i++){
                holder.push(todos[i][name]);
            }
            return holder;
        },
        setIsDone(value,index){
            todos[index].isdone=value;
        },
        getTodosNumbers(){
            return todos.length;
        },
        getTodoTagArray(){
            return todo.tag;
        }
    };
})();

export default todo;

