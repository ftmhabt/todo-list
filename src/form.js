const form = (() => {

    const form = document.querySelector('form');
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let radios = Array.from(document.querySelectorAll('input[name="priorty"]'));
    let date = document.querySelector('#date');
    let tags;

    
    return {
        show() { form.classList.add('show'); },
        hide() { form.classList.remove('show'); },
        reset() { form.reset(); },
        getTitle() { return title.value; },
        getDescription() { return description.value; },
        getRadio() {
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    return radios[i].value;
                }
            }
            return '';
        },
        getDueDate() { return date.value; },
        getTag() {
            tags = Array.from(document.querySelectorAll('input[type="checkbox"][class="tag"]'));
            let checkedTags=['all'];
            for (let i = 0; i < tags.length; i++) {
                if (tags[i].checked) {
                    checkedTags.push(tags[i].value);
                }
            }
            return checkedTags;
        },
    };
})()

export default form;
