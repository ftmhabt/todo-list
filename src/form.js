const form = (() => {
    const form = document.querySelector('form');
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let radios = Array.from(document.querySelectorAll('input[name="priorty"]'));
    let date = document.querySelector('#date');
    let tag = document.querySelector('select');
    return {
        show() { form.classList.add('show'); },
        hide() { form.classList.remove('show'); },
        reset() { form.reset(); },
        title,
        description,
        radios,
        date,
        tag,
    };
})()

export default form;
