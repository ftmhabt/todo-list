/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const todo = (() => {
  let todos = [];
  return {
    loadFromStorage() {
      todos=JSON.parse(localStorage.getItem('todos'));
    },
    add(title, description, priorty, dueDate, tag, isdone) {
      todos.push({
        title, description, priorty, dueDate, tag, isdone,
      });
      localStorage.setItem('todos',JSON.stringify(todos));
    },
    get(name) {
      const holder = [];
      for (let i = 0; i < todos.length; i++) {
        holder.push(todos[i][name]);
      }
      return holder;
    },
    setIsDone(value, index) {
      todos[index].isdone = value;
      localStorage.setItem('todos',JSON.stringify(todos));
    },
    getTodosNumbers() {
      return todos.length;
    },
    getTodoTagArrayBasedOnTags(tagName) {
      const holder = [];
      for (let i = 0; i < todos.length; i++) {
        for (let j = 0; j < todos[i].tag.length; j++) {
          if (todos[i].tag[j] === tagName) {
            holder.push(todos[i]);
          }
        }
      }
      return holder;
    },
    deleteDoneTodos(){
      for (let i = 0; i < todos.length; i++) {
        if(todos[i].isdone){
          todos.splice(i,1);
        }
      }
      localStorage.setItem('todos',JSON.stringify(todos));
    },
    isEmpty(){
      return todos.length===0;
    }
  };
})();

export default todo;
