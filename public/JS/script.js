
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
const userList = [
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



function fullName(userName){
    return `${userName.firstName} ${userName.lastName}`;
}

const user = {
    firstName : 'John',
    lastName : 'Doe',
    email : 'theophilusboateng@gmail.com',
    password : 'dev@1234',
};

fullName(user);


//Array Map

const users = [
    {firstName : 'Mike', lastName : 'Chapman'},
    {firstName : 'Don', lastName : 'King'},
    {firstName : 'Eddie', lastName : 'Murphy'},
    {firstName : 'Steve', lastName : 'Moore'}
];

users.map(fullName);

//Square 
function square(a){
    return a*a;
};


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myNumbers.map(square);


function isEven(num){
    return num%2 === 0;
}

isEven(12);



//Objects in JavaScript

function resetPassword (emailAddress, newPassword) {
  //check if email and password were supplied
  if (!emailAddress || !newPassword) {
      return `Email and/or Password not provided`;
  }
  
  if (emailAddress !== user.email) {
      return `Invalid e-mail`;
  }
  
  user.password = newPassword;
  return `Password successfully changed!`;
}


resetPassword('theophilusboateng@gmail.com', 123);

user;



// You have been give an array of students with some of them marked as absent and others marked as present.
// Write a function that returns the total number of students present
const students = [
  {id: 1, present: true},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},
];


function studentsPresent () {

  // Define a variable to track the total present
  let total = 0;

  // Begin a loop
  for (let i = 0; i < students.length; i++){
    // for any iteration, if student is present then increase total present by 1;
    if (students[i].present===true) {
      total++
    }
  }

   return total;
}


studentsPresent(students);



// Classes in JavaScript
class Laptop {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}


const laptop1 = new Laptop ('Dell', 'black');
const laptop2 = new Laptop ('HP', 'silver');
laptop1.brand;
laptop2.brand;   
