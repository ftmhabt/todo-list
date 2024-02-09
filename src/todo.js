/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const todo = (() => {
  const todos = [];
  return {
    add(title, description, priorty, dueDate, tag, isdone) {
      todos.push({
        title, description, priorty, dueDate, tag, isdone,
      });
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
  };
})();

export default todo;
