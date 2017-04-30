
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

$.isArray =  obj =>{
    return Object.prototype.toString.call(obj) === "[object Array]"
};

// console.log($.isArray([1,2,3]));

//implement the $.isArrayLike method

$.isArrayLike = obj => {

    if(typeof obj.length==='number'){
        if(obj.length === 0 ){
            return true;
        }else if(obj.length > 0){
            //checks if the last property is in the array
            return (obj.length-1) in obj
        }
    }

    return false;

};

// console.log('is Array like',$.isArrayLike({0:"zero",1:"one" ,2:"two",length: 3}));

//implement $.each method

$.each  = (collection, cb) =>{
    if($.isArrayLike(collection)){
        for( var i = 0 ; i < collection.length ; i++){
            var value = collection[i];
            // cb.call(value, i , value);
            console.log(value + " is at index "+ i);
        }
    }
    else {
        for( var prop in collection){
            if(collection.hasOwnProperty(prop)){
                var value = collection[prop];
                // cb.call(value, prop, value);
                console.log("prop "+ prop+  ", value "+ collection[prop])
            }

        }
    }
    return collection;
};

console.log($.each({0:"zero",1:"one" ,2:"two",3: '3'}));

