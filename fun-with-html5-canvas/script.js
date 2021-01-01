const canvas = document.querySelector('#draw')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 36
ctx.globalCompositeOperation = 'overlay'

let isDrawing = false
let lastX = 0
let lastY = 0
let direction = true
const color = {
    hue: 0,
    saturation: 100,
    lightness: 50
}

function draw(e) {
    if (!isDrawing) return


    ctx.strokeStyle = `hsl(${color.hue}, ${color.saturation}%, color.lightness}%`
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]

    color.hue++
    if (color.hue >= 360) {
        color.hue = 0
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction
    }

    color.saturation = Math.min((e.x / window.innerWidth * 100) + 20, 100)
    color.lightness = e.y / window.innerHeight * 40 - 20 + 50

    if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
})


canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))