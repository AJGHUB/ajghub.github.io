const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}]

// const p = document.querySelector('p')

let makeRed = function() {
    p.style.color = '#BADA55'
    p.style.fontsize = '50px'
}

//Regular
console.log('Kia Ora Hello')

//Interpolated
console.log('Kia Ora I am a %s string!', '@ajghub')
// console.log(`Hello I am ${var}`)

//Styled
console.log('%c I am some great text', 'font-size: 55px; background:red; text-shadow: 10px 10px 0 blue')

//warning!!!
console.warn('WARNING')

//Error: 
console.error('ERROR')

//Info
console.info('Information probably not useful...The typical truck holds 400 to 500 gallons of water')


const p = document.querySelector('p')
//Testing for something if it is false, (classlist does not contain ouch) console throws error otherwise true then console is empty
console.assert(p.classList.contains('ouch'), 'That is wrong!');

//clearing
// console.clear();

//Viewing DOM Elements
console.log(p) // gives you paragraph details
console.dir(p) //gives you the directory avail methods and props of elements/ classlists/childnodes/etc data re directory of c.log

//grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

//console counting 
console.count('ajghub');
console.count('ajghub');
console.count('ajghub');
console.count('ajghub');
console.count('ajghub');
console.count('ajghub');

//timing
console.time('fetching data');
fetch('https://api.github.com/users/ajghub')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

//Table display
console.table(dogs)



