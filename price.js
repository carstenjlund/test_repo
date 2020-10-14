let wrapper = document.querySelector('#wrapper')
let colors = ['green', 'orange', 'rosybrown', 'black', 'red', 'green']


colors.forEach(color => {
    let btn = document.createElement('button');
    btn.textContent = color;
    btn.setAttribute('data-color', color)
    wrapper.appendChild(btn)
});

wrapper.addEventListener('click', function (e) {
    if (e.target !== e.currentTarget) {
        changeColor(e.target, e.target.dataset.color)
    }
})
function changeColor(element, color) {
    console.log(element)
    console.log(color)
    if (element.style.backgroundColor == color) {
        element.style.backgroundColor = 'white'
    } else {
        element.style.backgroundColor = color
    }
}
