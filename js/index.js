//   Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//   mouseover
document.querySelector('h1').addEventListener('mouseover', (event) => {
    event.target.style.color = '#FF4500';
})

//mouseout
document.querySelector('h1').addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

//mouseenter
document.querySelector('.intro img').addEventListener('mouseenter', (event) => {
    event.target.src = 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
})

//mouseleave
document.querySelector('.intro img').addEventListener('mouseleave', (event) => {
    event.target.src = 'http://127.0.0.1:8080/img/fun-bus.jpg';
})

//dblclick
document.querySelector('footer').addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = "#17A2B8"
    e.target.style.color = "#FFEBCD"
})

//mousedown
document.querySelector('a').addEventListener('mousedown', (e) => {
    e.target.style.fontSize = '2rem'
})

//mouseup
document.querySelector('a:nth-of-type(2)').addEventListener('mouseup', (e) => {
    e.target.style.fontSize = '2.3rem'
})

//offline
window.addEventListener('offline', () => {
    console.log('I am OFFLINE')
    alert('I am OFFLINE')
})

//copy
document.addEventListener('copy', (event)=> {
    console.log('someone has copied some text!')
    event.target.style.color = 'white'
})

//paste
document.querySelector('.img-content:nth-of-type(1) img').addEventListener('paste', (event)=> {
    console.log('this text was selected')
    event.target.src = 'https://images.unsplash.com/photo-1482446439224-59276c41a5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
})

document.querySelector('.img-content:nth-of-type(2) img').addEventListener('paste', (event)=> {
    console.log('this text was selected')
    event.target.src = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
})

//   Nest two similar events somewhere in the site and prevent the event propagation properly
function clickEventHandler(event) {
    console.log(event.type + ' <--- This is the event type')
    console.log(event.target)
    console.log(event.currentTarget);
    // event.stopPropagation()
    //uncommenting above will stop propagation correctly.
  }

  document.querySelector('.content-destination img').addEventListener('click', clickEventHandler)
  document.querySelector('.content-destination').addEventListener('click', clickEventHandler)

//   Stop the navigation items from refreshing the page by using preventDefault()

document.querySelector('a').addEventListener('click', (event) =>{
event.preventDefault()
})