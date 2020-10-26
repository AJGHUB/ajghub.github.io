const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    // console.log('Hello Alice');
    this.classList.toggle('open');
}

function toggleActive(e) {
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));





// const panels = document.querySelectorAll('.panel')

// var toggleOpen = function () {
//     if (!this.classList.contains('open')) {
//         panels.forEach(panel => {
//             panel.classList.remove('open')
//             panel.classList.remove('open-active')
//         })
//         this.classList.toggle('open')
//     } else {
//         panels.forEach(panel => {
//             panel.classList.remove('open')
//             panel.classList.remove('open-active')
//         })
//     }
// }

// var toggleActive = function (e) {
//     if (e.propertyName.includes('flex')) {
//         if(this.classList.contains('open')){
//             this.classList.toggle('open-active')
//         }
//     }
// }

// panels.forEach(panel => panel.addEventListener('click', toggleOpen))

// panels.forEach(panel => panel.addEventListener('transitioned', toggleActive))