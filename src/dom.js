/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment";
import todo from "./todo";
import tag from "./tag";

const dom = (() => {
  const sectionLabel = document.querySelector(".tag-label");
  const legend = document.querySelector(".legend");

  return {
    populateContainer(tagName = "all") {
      const container = document.querySelector(".container");

      // clear
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      // populate
      for (
        let i = 0;
        i < todo.getTodoTagArrayBasedOnTags(tagName).length;
        i++
      ) {
        const todoItem = document.createElement("div");

        const div = document.createElement("div");
        const todoTitle = document.createElement("h3");
        const todoDate = document.createElement("div");
        const todoIsDone = document.createElement("input");
        const todoDes = document.createElement("div");
        const todoTags = document.createElement("div");

        todoDes.classList.add("hide");
        todoIsDone.type = "checkbox";
        div.classList.add("holder");
        todoTags.classList.add("hide");

        todoTitle.addEventListener("click", () => {
          if (todoDes.classList.contains("hide")) {
            todoItem.classList.add("opened");
            todoDes.classList.remove("hide");
            todoTags.classList.add("tag-holder");
          } else {
            todoItem.classList.remove("opened");
            todoDes.classList.add("hide");
            todoTags.classList.remove("tag-holder");
          }
        });

        for (
          let j = 1;
          j < todo.getTodoTagArrayBasedOnTags(tagName)[i].tag.length;
          j++
        ) {
          const todoTag = document.createElement("div");
          todoTag.textContent =
            todo.getTodoTagArrayBasedOnTags(tagName)[i].tag[j];
          todoTags.appendChild(todoTag);
        }

        todoTitle.textContent =
          todo.getTodoTagArrayBasedOnTags(tagName)[i].title;
        todoDes.textContent =
          todo.getTodoTagArrayBasedOnTags(tagName)[i].description;
        todoDate.textContent = moment(
          todo.getTodoTagArrayBasedOnTags(tagName)[i].dueDate
        ).fromNow();
        todoIsDone.checked = todo.getTodoTagArrayBasedOnTags(tagName)[i].isdone;

        if (todo.getTodoTagArrayBasedOnTags(tagName)[i].priorty === "high") {
          todoItem.classList.add("red");
        } else if (
          todo.getTodoTagArrayBasedOnTags(tagName)[i].priorty === "low"
        ) {
          todoItem.classList.add("green");
        } else {
          todoItem.classList.add("yellow");
        }

        div.appendChild(todoDate);
        div.appendChild(todoIsDone);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoDes);
        todoItem.appendChild(todoTags);
        todoItem.appendChild(div);
        container.appendChild(todoItem);

        todoIsDone.addEventListener('hover',()=>console.log('clicked'));
        todoIsDone.addEventListener("change", () => {
          todo.setIsDone(todoIsDone.checked, i);
        });
      }
    },
    populateTags() {
      const tagsUl = document.querySelector(".tags");

      // clear
      while (tagsUl.firstChild) {
        tagsUl.removeChild(tagsUl.firstChild);
      }

      // populate
      for (let i = 0; i < tag.getTagsNumber(); i++) {
        const li = document.createElement("li");
        const radio = document.createElement("input");
        const label = document.createElement("label");
        label.htmlFor = `side-tag${i}`;
        radio.type = "radio";
        radio.name = "tag";
        label.textContent = tag.getTags()[i].name;
        radio.checked = tag.getTags()[i].checked;
        radio.classList.add("side-tag");
        radio.setAttribute("id", `side-tag${i}`);

        radio.addEventListener("change", () => {
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
      const tagsFieldset = document.querySelector("#tags");

      if (legend.classList.contains("hide")) {
        legend.classList.remove("hide");
      }
      if (sectionLabel.classList.contains("hide")) {
        sectionLabel.classList.remove("hide");
      }

      // clear
      while (tagsFieldset.childNodes.length > 1) {
        tagsFieldset.removeChild(tagsFieldset.lastChild);
      }

      // populate
      for (let i = 1; i < tag.getTagsNumber(); i++) {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("tag");
        checkbox.setAttribute("id", `tag${i}`);
        checkbox.value = tag.getTags()[i].name;
        checkbox.addEventListener("change", () => {
          checkbox.setAttribute("checked", this.checked);
        });

        label.htmlFor = `tag${i}`;
        label.textContent = tag.getTags()[i].name;

        tagsFieldset.appendChild(checkbox);
        tagsFieldset.appendChild(label);
      }
    },
  };
})();

export default dom;
