/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const tag = (() => {
  let tags = [{ name: "all", checked: true }];
  return {
    loadFromStorage() {
      tags = JSON.parse( localStorage.getItem("tags"));
    },
    add(name, checked) {
      tags.push({ name, checked });
      localStorage.setItem("tags", JSON.stringify(tags) );
    },
    getTags() {
      return tags;
    },
    getTagsNumber() {
      return tags.length;
    },
    changeTagsState(name, checked) {
      for (let i = 0; i < tags.length; i++) {
        if (name === tags[i].name) {
          tags[i].checked = checked;
          localStorage.setItem("tags", JSON.stringify(tags));
        }
      }
    },
    getTrueTag() {
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].checked) {
          return tags[i].name;
        }
      }
      return "";
    },
  };
})();

export default tag;
