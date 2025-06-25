import {createTimeline, animate, stagger} from "animejs";

document.addEventListener("DOMContentLoaded", () => {

   let animation = animate('.about-main div', {
        background:'rgb(175,175,255)',
        delay: stagger(100)
    });

    let tl = createTimeline( {defaults:{
        ease: "easeOutExpo",duration: 500
        }});
    tl.sync(animation)
    tl.add('.about-header',{
        top: '20%',
        right: '50%',
        opacity: '1',
    },'-=200')
    tl.add('.about-main div',{
        background:'rgb(110,110,255)',
        delay: stagger(100)
    })



})

// document.addEventListener("DOMContentLoaded", () => {
//     let grids = document.querySelectorAll('.about-main div');
//     console.log("Grids found:", grids.length); // Add this to debug
//     let num = 0;
//
//     const delay = time => new Promise(resolve =>setTimeout(resolve, time));
//
//
//     grids.forEach(grid => {
//         delay(0).then(() => {
//             setTimeout(()=>{
//                 grid.style.backgroundColor = 'lightblue';
//             }, num += 100);
//         })
//         delay(500).then(() => {
//             setTimeout(()=>{
//                 grid.style.backgroundColor = 'rgb(228, 242, 255)';
//                 grid.style.width = '90%';
//             }, num += 100);
//         })
//     });
// })
