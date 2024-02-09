/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import todo from './todo';
import tag from './tag';

const dom = (() => ({
  populateContainer(tagName) {
    const container = document.querySelector('.container');

    // clear
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // populate
    for (let i = 0; i < todo.getTodoTagArrayBasedOnTags(tagName).length; i++) {
      const todoItem = document.createElement('div');
      const todoTitle = document.createElement('div');
      const todoDate = document.createElement('div');
      const todoIsDone = document.createElement('input');
      todoIsDone.type = 'checkbox';

      todoTitle.textContent = todo.getTodoTagArrayBasedOnTags(tagName)[i].title;
      todoDate.textContent = todo.getTodoTagArrayBasedOnTags(tagName)[i].dueDate;
      todoIsDone.checked = todo.getTodoTagArrayBasedOnTags(tagName)[i].isdone;

      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDate);
      todoItem.appendChild(todoIsDone);
      container.appendChild(todoItem);

      todoIsDone.addEventListener('change', () => {
        todo.setIsDone(todoIsDone.checked, i);
      });
    }
  },
  populateTags() {
    const tagsUl = document.querySelector('.tags');

    // clear
    while (tagsUl.firstChild) {
      tagsUl.removeChild(tagsUl.firstChild);
    }

    // populate
    for (let i = 0; i < tag.getTagsNumber(); i++) {
      const li = document.createElement('li');
      const radio = document.createElement('input');
      const label = document.createElement('label');
      label.htmlFor = `side-tag${i}`;
      radio.type = 'radio';
      radio.name = 'tag';
      label.textContent = tag.getTags()[i].name;
      radio.checked = tag.getTags()[i].checked;
      radio.classList.add('side-tag');
      radio.setAttribute('id', `side-tag${i}`);

      radio.addEventListener('change', () => {
        if (radio.checked) {
          for (let j = 0; j < tag.getTagsNumber(); j++) {
            if (j === i) {
              tag.changeTagsState(tag.getTags()[j].name, true);
            } else {
              tag.changeTagsState(tag.getTags()[j].name, false);
            }
          }
        }

        dom.populateContainer(tag.getTrueTag());
      });

      li.appendChild(label);
      li.appendChild(radio);
      tagsUl.appendChild(li);
    }
  },
  populateTagsInForm() {
    const tagsFieldset = document.querySelector('#tags');

    // clear
    while (tagsFieldset.childNodes.length > 1) {
      tagsFieldset.removeChild(tagsFieldset.lastChild);
    }

    // populate
    for (let i = 1; i < tag.getTagsNumber(); i++) {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('tag');
      checkbox.setAttribute('id', `tag${i}`);
      checkbox.value = tag.getTags()[i].name;
      checkbox.addEventListener('change', () => {
        checkbox.setAttribute('checked', this.checked);
      });

      label.htmlFor = `tag${i}`;
      label.textContent = tag.getTags()[i].name;

      tagsFieldset.appendChild(checkbox);
      tagsFieldset.appendChild(label);
    }
  },
}))();

export default dom;
