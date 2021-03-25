const person = {
    name: 'Max',
    age : 29,
    greet()  {
        console.log('Hi , I am ' + this.name)

    }
};

person.greet();

const hobbies = ['sports', 'Cooking'];

for (let hobby of hobbies) {

    console.log(hobby)
}

// const copiedPerson = {...person};
// console.log(copiedPerson)

console.log(hobbies.map(hobby => {
   return 'Hobby:' + hobby; 
}));
hobbies.push('Programming')
console.log(hobbies)

const copiedArray = [...hobbies];
console.log(copiedArray);