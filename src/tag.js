const tag = (() => {
    tagNames=['default'];
    const tagName = document.querySelector('input#tag-name');
    const ul = document.querySelector('ul');
    const select=document.querySelector('#tags');
    return {
        add() {
            const li = document.createElement('li');
            const option = document.createElement('option');
            option.value= tagName.value;
            option.textContent=tagName.value;
            li.textContent = tagName.value;
            tagNames.push(tagName.value);
            tagName.value='';
            ul.appendChild(li);
            select.appendChild(option);
        },
        tagNames,
    };
})();

export default tag;