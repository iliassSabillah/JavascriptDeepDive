
//implement the jquery $.extends method

$ = function(selector){};

$.extends= (target, object)=>{
    for( let prop in object ){
        if(object.hasOwnProperty(prop)){
            target[prop] = object[prop];
        }
    }

    return target;
};

let name = $.extends({first: 'iliass'}, {last:'sabillah'});


let info = $.extends(name, {address: '123', zip:'1133'});
// implement the jquery $.isArray() method
console.log(info);
