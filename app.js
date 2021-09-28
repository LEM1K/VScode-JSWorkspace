const h1 = document.querySelector("div.hello:first-child h1");
//hellos.innerText = "got you"
//console.dir(title);
//title.style.color="blue";


function handleTitleClick() {
    h1.style.color = "black"; 
};
function handleMouseEvent() {
    h1.style.color = "blue"; 
    h1.innerText="mouse is here"; 
};
function handleMouseleave() {
    h1.style.color = "red"; 
    h1.innerText="mouse is gone";
};

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}
function handleWindowOffline() {
    alert("no wifi");
}
function handleWindowOnline() {
    alert("find wifi");
}

//title.addEventListener("click", handleTitleClick);
//title.addEventListener("mouseenter", handleMouseEvent);
//title.addEventListener("mouseleave", handleMouseleave);

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEvent;
h1.onmouseleave = handleMouseleave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);