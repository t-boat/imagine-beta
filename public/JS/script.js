
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