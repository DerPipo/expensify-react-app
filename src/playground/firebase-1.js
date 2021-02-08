// import all in dev mode
import database from '../firebase/firebase'

// change to import only the used features
// import firebase from 'firebase/app'
// import 'firebase/database'

// database.ref().once('value').then((snapshot) => {
//     console.log(snapshot.val())
// }).catch((e) => {
//     console.log('Error fetching data', e)
// })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     database.ref('age').set(99)
// }, 3500);

// setTimeout(() => {
//     database.ref().off()
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(10)
// }, 10500);

database.ref().set({
    name: 'Pipo',
    age: 33,
    isSingle: false,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Cologne',
        country: 'Germany'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('This failed', e)
})

const onValueChange = database.ref().on('value', (snapshot) => {
    const user = snapshot.val()
    console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`)
}, (e) => {
    console.log(e)
})

setTimeout(() => {
    database.ref().update({
        name: 'Andrew',
        'job/title': 'Manager',
        'job/company': 'Amazon'
    })
}, 5000);

// // Löscht alles und setzt gesamte DB auf den string 'This is my data'
// // database.ref().set('This is my data')

// // Fügt isSingle hinzu
// database.ref('isSingle').set(false)

// // Löscht isSingle
// database.ref('isSingle').remove()
// // Äquivalent
// // database.ref('isSingle').set(null)

// // Updatet location.city
// database.ref('location/city').set('Marburg')

// // update() bietet 3in1
// database.ref().update({
//     clothesSize: 'XL', // === ref('clothesSize').set('XL')
//     age: null, // === ref('age').remove()
//     name: 'Charly' // === ref('name').set('Charly') // und name exsistiert bereits
// })

// // CHALLENGE
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Cologne'
// })
