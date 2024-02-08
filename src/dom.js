import todo from "./todo";
import tag from "./tag";

let dom = (() => {
    return {
        populateContainer(tagName) {


            let tags = document.querySelectorAll('.side-tag');
            let container = document.querySelector('.container');

            //clear
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            //populate
            for (let i = 0; i < todo.getTodoTagArrayBasedOnTags(tagName).length; i++) {
                let todoItem = document.createElement('div');
                let todoTitle = document.createElement('div');
                let todoDate = document.createElement('div');
                let todoIsDone = document.createElement('input');
                todoIsDone.type = 'checkbox';

                todoTitle.textContent = todo.getTodoTagArrayBasedOnTags(tagName)[i].title;
                todoDate.textContent = todo.getTodoTagArrayBasedOnTags(tagName)[i].dueDate;
                todoIsDone.checked = todo.getTodoTagArrayBasedOnTags(tagName)[i].isdone;

                todoItem.appendChild(todoTitle);
                todoItem.appendChild(todoDate);
                todoItem.appendChild(todoIsDone);
                container.appendChild(todoItem);

                todoIsDone.addEventListener('change', function () {
                    todo.setIsDone[todoIsDone.checked, i];

                });



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
                let radio = document.createElement('input');
                let label=document.createElement('label');
                label.htmlFor=`side-tag${i}`;
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
                })

                li.appendChild(label);
                li.appendChild(radio);
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
                checkbox.value = tag.getTags()[i].name;
                checkbox.addEventListener('change', () => {
                    checkbox.setAttribute('checked', this.checked);
                });


                label.htmlFor = `tag${i}`;
                label.textContent = tag.getTags()[i].name;


                tags_fieldset.appendChild(checkbox);
                tags_fieldset.appendChild(label);

            }

        },
    };
})()

export default dom;