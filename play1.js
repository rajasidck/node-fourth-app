let name1 = 'Max';
let age = 29;
const hasHobbies = true;

age = 30

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ( 
     'Name is '+
    userName + 
    ', age is '+
    userAge +
     ' and the user has hobbies: ' + 
    userHasHobby
    );

};

const add = (a,b) => {
    return a + b;
}

const addRandom = () => 1+2;

console.log(summarizeUser(name1,age, hasHobbies))
console.log(add(2,3))
console.log(addRandom())
