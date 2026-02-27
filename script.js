// DOM- Document Object Model
// Frontend ki JS

// DOM 4 Pillars 
// - Selection of an Element 
// - Changing HTML
// - Changing CSS
// - Event listeners

 // var h1 = document.querySelector("h1")

// h1.innerHTML = " I am shasi"
// // h1.style.color = "red"
// // h1.style.backgroundColor = "white"

// // h1.addEventListener("click",function(){
// //     console.log("hello shasi ")
// })

// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     h1.innerHTML = 'I am shasi'
//     h1.style.color = 'red'
//     h1.style.fontSize = '60px'
// })

// var inc = document.querySelector('#inc')
// var dec = document.querySelector('#dec')
// var h2 = document.querySelector('h2')

// var a = 0

// inc.addEventListener('click',function(){
//     a++
//     h2.innerHTML = a
// })
// dec.addEventListener('click',function(){
//     a--
//     h2.innerHTML = a
// })


// var a = Math.random()*10000
// var b = Math.floor(a)
// console.log(b);

// var a = Math.floor(Math.random()*10000)
// console.log(a);

var btn = document.querySelector('button')
var box = document.querySelector('#box')

btn.addEventListener('click',function(){
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    box.innerHTML = `rgb(${c1},${c2},${c3})`

})