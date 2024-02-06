const tag = (() => {
    let tags=['all'];
    return {
        add(name) {
            tags.push(name);
        },
        getTags(){return tags;},
        getTagsNumber(){return tags.length;},
    };
})();

export default tag;