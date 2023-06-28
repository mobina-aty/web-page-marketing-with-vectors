// BOM, DOM

let h1Elem = document.getElementById('title')

h1Elem.setAttribute('class', 'js-text')

let liElems = document.getElementsByClassName('list-item')

console.log(liElems[0].setAttribute('id', 'about'))

// console.log(h1Elem.getAttribute('class'))