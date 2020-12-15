//## Array Cardio Day 2

const people = [
{
    name: 'Alice',
    year: 1975
},
{
    name: 'Samantha',
    year: 1900,
},
{
    name: 'Frank',
    year: 1999,
},
{
    name: 'Gonzales',
    year: 2020,
},
{
    name: 'Kelvin',
    year: 1835,
},
]

const comments = [
{
    text: 'Awesome!',
    id: 112233
},
{
    text: 'Brilliant!',
    id: 223344
},
{
    text: 'You are amazing!',
    id: 334455
},
{
    text: 'Totally incredible!',
    id: 445566
},
{
    text: 'I love this!',
    id: 556677
}
]

const currentYear = (new Date()).getFullYear()

//Some and every checks:
//Array.prototype.some() //is at least one person 19 or older?

//method 1 > 
// const isAdult = people.some(function(person) {
//     const currentYear = (newDate()).getFullYear();
//     if(currentYear - person.year >= 19) {
//         return true;
//     }
// })


//method uses implicit return of curly brackets - same as above, cleaner
    var isAdult = people.some(p => currentYear - p.year >= 19)
    console.log({ isAdult })


//Array.prototype.every() //is everyone 19 or older?
    var isAllAdults = people.every(p => currentYear - p.year >= 19)
    console.log({ isAllAdults })


//Array.prototype.find()
//Find is like filter, instead returns the one youre looking for
//Find the comment with the ID of 823423
    const comment = comments.find(c => c.id === 334455)
    console.log(comment)

//Array.prototype.findIndex()
//Find the comment with this ID
//Delete the comment with the ID of 334455
    const index = comments.findIndex(c => c.id === 334455)
    comments.splice(index, 1)
    console.table(comments)


