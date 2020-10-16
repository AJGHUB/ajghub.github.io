const inputs = document.querySelectorAll('.controls input')

var updateHandler = function () {
    const suffix = this.dataset.sizing || ''
document.documentElement.style.setProperty(`----${this.name}`, this.value + suffix)
}

inputs.forEach(inputs => {
    input.addEventListener('change', updateHandler)
    input.addEventListener('mousemove', updateHandler)
})