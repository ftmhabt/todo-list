/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const form = (() => {
  const formElement = document.querySelector("form");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const radios = Array.from(document.querySelectorAll('input[name="priorty"]'));
  const date = document.querySelector("#date");

  let tags;

  return {
    show() {
      formElement.classList.add("show");
    },
    hide() {
      formElement.classList.remove("show");
    },
    reset() {
      formElement.reset();
    },
    checkValidity() {
      return formElement.checkValidity();
    },
    getTitle() {
      return title.value;
    },
    getDescription() {
      return description.value;
    },
    getRadio() {
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          return radios[i].value;
        }
      }
      return "";
    },
    getDueDate() {
      return date.value;
    },
    getTag() {
      tags = Array.from(
        document.querySelectorAll('input[type="checkbox"][class="tag"]')
      );
      const checkedTags = ["all"];
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].checked) {
          checkedTags.push(tags[i].value);
        }
      }
      return checkedTags;
    },
  };
})();

export default form;
