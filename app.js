var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);

alert('Hi there, ' + user + ', imma ask you a question.');

var answer1 = prompt(user + ', this is a yes/no question, so please answer with Y or N. Does Sam have 4 cats?');
console.log('The user answered Question 1: ' + answer1);

if(answer1 === 'N') {
  alert('Damn straight. ' + user + ' Sam has 3 cats.');
} else {
  alert('WRONG. YOU LOSE. HAHA.');
}
