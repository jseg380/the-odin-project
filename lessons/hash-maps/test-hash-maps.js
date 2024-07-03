import { HashMap } from './hash-maps.js';

const test = new HashMap();

// Insert sample data
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');


// Show hash map at the beginning
console.log('Initial hash map');
console.log(test.toString());
console.log('\n----------------------------------------\n');


// Causing the hash map to resize
console.log('Before resizing');
console.log(test.toString());
test.set('moon', 'silver');
console.log('After resizing');
console.log(test.toString());
console.log('\n----------------------------------------\n');


// Overwriting existing values
console.log(`Get moon value: ${test.get('moon')}`);
console.log('Modifying moon value');
test.set('moon', 'NOT-silver');
console.log(`Get moon value: ${test.get('moon')}`);
console.log('\n----------------------------------------\n');


// Method has to find out if there is any entry with a certain key
console.log(`Does it have lion? ${test.has('lion')}`);
console.log(`Does it have lion2? ${test.has('lion2')}`);
console.log('\n----------------------------------------\n');


// Remove a value
test.remove('kite');
console.log(test.toString());
console.log('\n----------------------------------------\n');


// Array with all the keys
console.log('Keys array');
console.log(test.keys());
console.log('\n----------------------------------------\n');


// Array with all the values
console.log('Values array');
console.log(test.values());
console.log('\n----------------------------------------\n');


// Array with all the entries (pair key, value)
console.log('Entries array');
console.log(test.entries());
console.log('\n----------------------------------------\n');


// Clearing hash map
test.clear();
console.log('Hash map reset')
console.log(test.toString());
