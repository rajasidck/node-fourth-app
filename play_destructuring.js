const person = {
    name:'Raja',
    age:'35',
    greet() {console.log('Hi, I am ' +this.name)}
};

const printName = (person) =>{
    console.log(person.name)

}

printName(person);