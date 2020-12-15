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

const currentYear = (newDate()).getFullYear()

//Some and every checks:
//Array.prototype.some() //is at least one person 19 or older?
    var isAdult = people.some(p => currentYear - p.year >= 19)
    console.log({ isEveryoneAdult })



