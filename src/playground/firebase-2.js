import database from '../firebase/firebase'

database.ref('expenses').once('value').then((snapshot) => {
    const expenses = []
    snapshot.forEach(childSnapshot => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses)
})

database.ref('expenses').on('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot.val())
    })
})

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses').push({
//     description: 'Desc',
//     note: '',
//     amount: 350
// })

// database.ref('expenses').push({
//     description: 'Coffee',
//     note: 'from Starbucks',
//     amount: 750
// })

// database.ref('expenses').push({
//     description: 'rent',
//     note: 'Cologne',
//     amount: 95000
// })



// const firebaseNotes = {
//     notes: {
//         fhasofhds: {
//             title: 'first note!',
//             body: 'this is my note'
//         },
//         1234: {
//             title: 'first note!',
//             body: 'this is my note'
//         }
//     }
// }

// database.ref('notes').push({
//     title: 'Course topix',
//     body: 'React native angular python'
// })

// database.ref('notes/-MSm8RzhfOeGw3935R0x').update({
//     body: 'testo'
// })

// const notes = [{
//     id: '123',
//     title: 'this is my note',
//     body: 'first note*'
// }, {
//     id: 'fjsaüf',
//     title: 'title',
//     body: 'body'
// }]

// database.ref().set(firebaseNotes)