window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*8;

const y=(e.clientY/window.innerHeight-.5)*8;

document.querySelector(".background").style.transform=
`scale(1.08) translate(${x}px,${y}px)`;

});
