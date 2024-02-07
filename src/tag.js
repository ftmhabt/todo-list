const tag = (() => {
    let tags=[{name:'all',checked:true}];
    return {
        add(name,checked) {
            tags.push({name,checked});
            console.table(tags);
        },
        getTags(){return tags;},
        getTagsNumber(){return tags.length;},
        changeTagsState(name,checked){
            for (let i = 0; i < tags.length; i++) {
                if(name===tags[i].name){
                    tags[i].checked=checked;
                }
            }
        },
        getTrueTag(){
            for (let i = 0; i < tags.length; i++) {
                if(tags[i].checked){
                    return tags[i].name;
                }
            }
        }
    };
})();

export default tag;