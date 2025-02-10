let images = document.querySelectorAll(".container div img");
let close_btn = document.getElementById("close");
let left_btn = document.getElementById("left");
let right_btn = document.getElementById("right");
let popItem = document.getElementsByClassName("popItem")[0]
let popContainer = document.querySelector(".popcontainer");
let img = [];
let currentIndex = 0;

for(var i = 0 ; i < images.length;i++){
    images[i].addEventListener("click",function(){
        let src = this.getAttribute("src");
        img.push(src)
        popContainer.style.display = "flex"
    })
}
// Esc => 27 right =>39 left => 37
close_btn.addEventListener("click",closeTab);
right_btn.addEventListener("click",nextslider)
left_btn.addEventListener("click",preslider)

close_btn.addEventListener("keydown",function(e){
    if(e.keyCode === 27 ){
        closeTab();
    }
})
function nextslider(){
currentIndex++;
if(currentIndex >= img.length){
    currentIndex = 0;
}
console.log("ziad");
}
function preslider(){
    currentIndex--;
    if(currentIndex < img.length){
        currentIndex = img.length - 1;
    }
    console.log("ziad");
   
}

function closeTab(){
    popContainer.style.display = "none"
}