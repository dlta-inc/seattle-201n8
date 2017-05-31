'use strict';

//ARRAYS DEMONSTRATION

var name = 'Adam';

var names = ['Adam', 'Rachel', 'Tyler', 'Jeremiah', 'Kyle'];

var instructorName = names[3];

console.log(instructorName);

var mixedTypes = ['Adam', 31, names];

//before
console.log(mixedTypes);


console.log(mixedTypes);

//remove names array
var namesIndex = mixedTypes.indexOf(names);
console.log(namesIndex);

//using splice to insert
mixedTypes.splice(1, 0, 'Wallraff');

//using splice to remove
mixedTypes.splice(namesIndex, 1);

//after change
console.log(mixedTypes);
console.log(mixedTypes.length);



















