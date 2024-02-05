import './style.css';
import form from './form';
import todo from './todo';
import tag from './tag';

//show todo form button
let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', form.show);

//add todo button
let submitTodoBtn = document.querySelector('#submit-todo-btn');
submitTodoBtn.addEventListener('click', (event) => {

  event.preventDefault();

  todo.add(form.title.value,
    form.description.value,
    getSelectedRadioValue(),
    form.date.value,
    form.tag.value,
    false);

  form.reset();
  form.hide();
});

function getSelectedRadioValue() {

  for (let i = 0; i < form.radios.length; i++) {
      if (form.radios[i].checked) {
          return form.radios[i].value;
      }
  }
  return '';
}

//add tag button
let addTagBtn = document.querySelector('#add-tag');
addTagBtn.addEventListener('click',tag.add);