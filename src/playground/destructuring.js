// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// }

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

//
// Array destructuring
//

const address = ['Auguststr. 2', 'Cologne', 'Hessen', '50733', '2 OG', 'Nippes']
const [, city, state, ...rest] = address
console.log(`You are in ${city} ${state}.`, rest)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [name, , mediumPrice] = item
console.log(`A medium ${name} costs ${mediumPrice}`)