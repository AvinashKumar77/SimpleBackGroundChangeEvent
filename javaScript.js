const button = document.querySelector("button")   //querySelector is use for select data of button
const body = document.querySelector("body") //querySelector is use for select data of body
const color = ['#f1c40f', '#1abc9c', '#34495e', '#d35400', '#2ecc71', '#95a5a6']

body.style.backgroundColor = '#1ahc9c'

button.addEventListener('click', changeB)

function changeB(){
    const colorIndex = parseInt(Math.random()*color.length)  // .random function choose color randomly
    body.style.backgroundColor = color[colorIndex]
}