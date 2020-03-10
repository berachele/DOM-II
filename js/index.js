// Your code goes here
console.log('something else');

// homeLink.addEventListener(
//     'click', () => {
//         //function when link is clicked
//         console.log('the link got clicked');
//     }
// )
// //pass two arguments:
// //string with name of the event ('click')
// //callback function

// document.querySelector('nav').addEventListener('click', () => {
//     console.log('nav got clicked!!');
// })

// //attach a 'click' event listener to the header element
// //console.log
// document.querySelector('.main-navigation').addEventListener('click', ()=>{
//     console.log('the header was clicked-woot!');
// })

// document.body.addEventListener('click', (stuff) => {
//     console.log(stuff);
//     console.log('the body of the page got clicked');
// })

//can also do this below for cleaner and DRYer code
// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget);

//     //you can grab ANY element in the DOM
//     //you can do ANYTHING you want with it
//     //you can create new elements and attch them to the DOM
//     //you can destroy any part of the website
//     //you can trigger network requests to sent data to the server
//     //animations
//     //analytics
//   }

//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)



//   Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//   mouseover
document.querySelector('h1').addEventListener('mouseover', (event) => {
    event.target.style.color = '#FF4500';
})
document.querySelector('h1').addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

// //   keydown
// document.querySelector().addEventListener('keydown', () => {})

// //   wheel
// document.querySelector().addEventListener('wheel', (event) => {

// })

// //   drag / drop
// document.querySelector().addEventListener('drag', () => {})
// document.querySelector().addEventListener('drop', () => {})

// //   load
// document.querySelector().addEventListener('load', () => {})


// //   focus
// document.querySelector().addEventListener('focus', () => {})


// //   resize
// document.querySelector().addEventListener('resize', () => {})


// //   scroll
document.querySelector().addEventListener('scroll', () => {

})


// //   select
// document.querySelector().addEventListener('select', () => {})


//   dblclick
document.querySelectorAll('nav a').addEventListener('dblclick', (link) => {
    Array
})


//  Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.
//   Nest two similar events somewhere in the site and prevent the event propagation properly

 //   Stop the navigation items from refreshing the page by using preventDefault()