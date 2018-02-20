
console.log('\n');

var myArray = [5, 6, 5, 6, 7, 8, 345, 345, 343, 345, 3, 453, 453, 453, 45, 34, 53, 45, 345, 345, 34];
console.log('PEOPLE -- this is our array: -----', myArray);
console.log('-----------------------------------');

console.log('Now we are computing the average');

var total = 0;

for(var i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

console.log('Hey Guys... did you know that the total of the numbers is: -- tadddaaaa ---', total);
console.log('\n');


console.log('And by the way, the number of numbers :)  is: -- tadddaaaa ---', myArray.length);
console.log('\n');



console.log('sooooooooo:    ', total, ' / ', myArray.length);
console.log('\n');

var avg = total / myArray.length;

console.log('avreage is: ----- TARA --------', avg);
console.log('\n');
