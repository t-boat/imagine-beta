
const btn = document.getElementById('btn2');

btn.onclick = function (){
    // console.log('Thank you!');
    // alert('Come again!');
    const name = prompt('Please enter your Full Name: ');
    document.getElementById('fullName').innerText = name;
};

const person = {
    fullName : 'Theophilus Boateng',
    age : 45,
    nationality : 'Ghanaian'
};

person['age'] = 50;

person.nationality = 'British';

console.log(person['nationality']);
console.log(person.age);


// JavaScript MAth
const pi = Math.PI;

Math.pow(2, 3);

Math.round(4.6);

Math.ceil(4.2);
Math.ceil(-4.2);

Math.floor(4.2);
Math.floor(-4.2);

Math.sqrt(64);

Math.abs(-4.7);