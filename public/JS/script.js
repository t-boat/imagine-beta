
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


//JavaScript Strings
let text = "John Doe";

let answer1 = "It's alright";

//Template Strings
text = `He's often called "Johnny"`;

let length = text.length;

Number('1234');


// Write a funtion that will add a participant to our Google classroom
// let user_email = 'example@email.com'
// let password = 'orange'
const participants = [];
function addParticipant(email) {
  // Check if email was provided NOTE: short hand "if (!email)"
  if (email===undefined|| email===null)  {
    return 'No email provided';
  }
  // Check if email is valid
  if (!email.includes('@'&&'.com')) {
    return 'Invalid email provided'
  }
  // Add email to participants
  participants.push(email);
  return 'Participant added!';
}

addParticipant('example@gmail.com');
addParticipant()
addParticipant('example@')
// addParticipant('example@.com')
addParticipant('example@gmail.com')
participants;


// Arrays In JavaScript
const users = [
  {
    username: 'meddy',
    password: '1234',
    email: 'example@gmail.com'
  },
  {
    username:'darah',
    password:'12345',
    email:'darah@gmail.com'
  }
]
