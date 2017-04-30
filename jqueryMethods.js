
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
        for( let i = 0 ; i < collection.length ; i++){
            let value = collection[i];
            cb.call(value, i , value);
        }
    }
    else {
        for( let prop in collection){
            if(collection.hasOwnProperty(prop)) {
                let value = collection[prop];
                cb.call(value, prop, value);
            }
        }
    }
    return collection;
};

// $.each({0:"zero",1:"one" ,2:"two",3:"three",length: 4}, (i,value)=>{ i==3? console.log(value): null});

// implement makeArray method

$.makeArray= (arrayLike) =>{
  if($.isArrayLike(arrayLike)){
      var array = [];
      $.each(arrayLike, function(i, item){
          array.push(item);
      })
  }
  return array;
};

// console.log($.makeArray({0:"zero",1:"one" ,2:"two",length: 3}));

// implement $.proxy jquery method

$.proxy = (fn, context)=>{
    return ()=>{
        return fn.apply(context, arguments)
    }
};

let Person = {
    name : "iliass",
    speak: function(){
        console.log(this.name+" says hello")
    }
};

// let speak = Person.speak; //--> undefined says hello
let speak = $.proxy(Person.speak, Person); //--> iliass says hello
speak();