function addTask(type, content, atributes){
    let result = document.createElement(type);

    if(atributes !== undefined){
        Object.assign(result, atributes);
    }

    if(Array.isArray(content)){
        content.forEach(append);
    } else {
        append(content);
    }

    function append(node){
        if(typeof node === 'string'){
            node = document.createTextNode(node);
        }
        result.appendChild(node);
    }
    return result;
}