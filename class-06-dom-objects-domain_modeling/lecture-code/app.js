'use strict';
// 
// var names = [
//   'Adam',
//   'Amanda', 
//   'Mika'];
// 
// names[1];
// 
// var namesObject = {
//   0: 'Adam', 
//   1: 'Amanda', 
//   2: 'Mika'};
// 
// 
// var adam = {
//   firstName : 'Adam',
//   lastName : 'Wallraff',
//   email : 'adam@codefellows.com',
//   age: 31,
//   pets: ['Mika'],
// };
// 
// user.login = function(){
//   console.log('The user has logged in!!!');
// };
// 
// user.logOut = function(){
//   console.log('The user has logged out...');
// };
// 
// console.log('Users Info - first name: ' + user.firstName);
// console.log('Users Info - last name: ' + user.lastName);
// console.log('Users Info - email: ' + user.email);
// console.log('Users Info - age: ' + user.age);
// console.log('Users Info - pets: ' + user.pets);
// 
// user.hasCuteDog = true;
// // user.fullName = 'Adam Wallraff';
// user.firstName = 'Bob';
// 
// user.fullName = user.firstName + ' ' + user.lastName;
// 
// 
// console.log('Users Info - full name: ' + user.fullName);
// 
// 
// console.log('Users Info - is their dog cute?: ' + user.hasCuteDog);
// 
// console.log('USER: ' + user);
// console.log(user);
// 
// user.login();


var ulElement = document.getElementById('primary-list');
console.log(ulElement);

for (var i = 0; i < 1000; i++) {
  var listItemElement = document.createElement('li');

  listItemElement.textContent = 'This is item ' + i;

  ulElement.appendChild(listItemElement);
  console.log(ulElement.children);
}
















