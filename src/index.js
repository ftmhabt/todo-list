/* eslint-disable linebreak-style */
import './style.css';
import dom from './dom';
import form from './form';
import todo from './todo';
import tag from './tag';

// show todo form button
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  form.show();
  dom.populateTagsInForm();
});

// add todo button
const submitTodoBtn = document.querySelector('#submit-todo-btn');
submitTodoBtn.addEventListener('click', (event) => {
  event.preventDefault();

  todo.add(
    form.getTitle(),
    form.getDescription(),
    form.getRadio(),
    form.getDueDate(),
    form.getTag(),
    false,
  );

  form.reset();
  form.hide();

  dom.populateContainer(tag.getTrueTag());
});

// add tag button
const addTagBtn = document.querySelector('#add-tag');
const tagField = document.querySelector('#tag-name');
addTagBtn.addEventListener('click', () => {
  tag.add(tagField.value, false);
  dom.populateTags();
  tagField.value = '';
});

// tags checkbox
