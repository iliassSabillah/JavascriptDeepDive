
//object reference in memory

var me = {
        name: {
            first: "iliass"
        }
    },
    name= me.name;


console.log('me',me);
console.log('me.name',me.name);
console.log('name.first',name.first);
//this will delete the pointer to the key 'name' in object me
delete me.name;
console.log('me',me);
console.log('me.name',me.name);
console.log('name.first',name.first);


//constructors and prototype

var Person = function(name){
    this.name = name;
};

Person.prototype.speak = function(){
    console.log('Hello', this.name)
};

var person = new Person('iliass');

//write the DOT operator as it was implemented in JS
function DOT(object, prop){

    if(object.hasOwnProperty(prop)){
        return object[prop];
    }
    else {
        DOT(object.__proto__, prop);
    }
}

//write the DOTCALL operator as it was implemented in JS


// && typeof object[prop]==='function'
function DOTCALL(object, prop, args){
    var fn = DOT(object, prop);

    if(fn){
        return fn.apply(object, args);
    }
}

//write the NEW operator as it was implemented in JS

function NEW(object, args){
    //create new object
    var newObject = {};
    //set the newobject proto to point to the object
    newObject.__proto__ = object.prototype;


}

