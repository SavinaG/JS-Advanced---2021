function objectFactory(input){
    let propList = JSON.parse(input);

    let result = propList.reduce((a, x) => ({...a, ...x}), {});
    //let result = propList.reduce((a, x) => Object.assign({}, a, x), {});
    
    return result;

}
objectFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)