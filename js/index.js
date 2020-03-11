//   Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:

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
window.addEventListener('offline', (e) => {
    console.log('I am OFFLINE')
    alert('I am OFFLINE')
})





//  Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.
//   Nest two similar events somewhere in the site and prevent the event propagation properly

 //   Stop the navigation items from refreshing the page by using preventDefault()