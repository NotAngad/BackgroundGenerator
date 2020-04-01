let person = [{
    name: 'Angad',
    age: 20
}, {
    name: 'Kunal',
    age: 23
}, {
    name: 'Vidyut',
    age: 22
}];

let age22 = person.filter(subject => subject.age === 22);

age22.forEach(person => console.log(person.name));