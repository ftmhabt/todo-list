import todo from "./todo";
import tag from "./tag";

let dom = (() => {
    return {
        populateContainer() {


            let tags = document.querySelectorAll('.side-tag');
            let container = document.querySelector('.container');

            //clear
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            //populate
            for (let i = 0; i < tags.length; i++) {
                for (let j = 0; j < todo.getTodosNumbers; j++) {
                    if (tags[i].checked) {
                        if (todo.getTodoTagArray()[j].includes(tags[i].value)) {
                            let todoItem = document.createElement('div');
                            let todoTitle = document.createElement('div');
                            let todoDate = document.createElement('div');
                            let todoIsDone = document.createElement('input');
                            todoIsDone.type = 'checkbox';

                            todoTitle.textContent = todo.get('title')[j];
                            todoDate.textContent = todo.get('dueDate')[j];
                            todoIsDone.checked = todo.get('isdone')[j];

                            todoItem.appendChild(todoTitle);
                            todoItem.appendChild(todoDate);
                            todoItem.appendChild(todoIsDone);
                            container.appendChild(todoItem);

                            todoIsDone.addEventListener('change', function () {
                                todo.setIsDone[todoIsDone.checked, j];
                            });
                        }
                    }
                }
            }
        },
        populateTags() {

            let tags_ul = document.querySelector('.tags');

            //clear
            while (tags_ul.firstChild) {
                tags_ul.removeChild(tags_ul.firstChild);
            }

            //populate
            for (let i = 0; i < tag.getTagsNumber(); i++) {

                let li = document.createElement('li');
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = tag.getTags()[i];
                checkbox.classList.add('side-tag');

                li.textContent = tag.getTags()[i];

                li.appendChild(checkbox);
                tags_ul.appendChild(li);

            }
        },
        populateTagsInForm() {

            let tags_fieldset = document.querySelector('#tags');

            //clear
            while (tags_fieldset.childNodes.length > 1) {
                tags_fieldset.removeChild(tags_fieldset.lastChild);
            }

            //populate
            for (let i = 1; i < tag.getTagsNumber(); i++) {

                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('tag');
                checkbox.setAttribute('id', `tag${i}`);
                checkbox.value = tag.getTags()[i];
                checkbox.addEventListener('change', () => {
                    checkbox.setAttribute('checked', this.checked);
                    if (checkbox.checked) {
                        console.log('checked');
                    } else {
                        console.log('unchecked');
                    }
                    dom.populateContainer();
                });
                

            label.htmlFor = `tag${i}`;
            label.textContent = tag.getTags()[i];


            tags_fieldset.appendChild(checkbox);
            tags_fieldset.appendChild(label);

            }

        },
    };
}) ()

export default dom;