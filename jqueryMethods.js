
//implement the jquery $.extends method

function $DOTEXTENDS(target, object){
    for( var prop in object ){
        if(object.hasOwnProperty(prop)){
            var value = object[prop];
            target[prop] = value;
        }
    }

    return target;
}

