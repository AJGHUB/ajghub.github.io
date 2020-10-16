const secondHand= document.querySelector('.second-hand');
const minsHand= document.querySelector('.min-hand');
const hourHand= document.querySelector('.hour-hand');
      


let setDate = () => {
    const now = new Date();
            
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds * 6) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
            

    const mins = now.getMinutes();
    const minsDegrees = (mins * 6) + (seconds / 10) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour * 30) + (mins / 2) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
             
setInterval(setDate, 1000)
setDate()
