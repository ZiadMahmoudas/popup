var images = document.querySelectorAll(".container div img");
var close_btn = document.getElementById("close");
var left_btn = document.getElementById("left");
var right_btn = document.getElementById("right");
var popImg = document.getElementById("popImg")
var popContainer = document.querySelector(".popcontainer");
var img = [];
var currentIndex = 0;

images.forEach(function(el,index){
   img.push(el.getAttribute("src"));
   el.addEventListener("click",function(e){
    currentIndex = index
      popImg.src = img[currentIndex];
      popContainer.style.display = "flex"
    })
    this.addEventListener("mousemove",function(){
     popImg.style.cursor = "pointer";    
        setTimeout(()=>popImg.style.cssText = "cursor:none",8500)
    })

})
// Esc => 27 right =>39 left => 37
close_btn.addEventListener("click",closeTab);
right_btn.addEventListener("click",nextslider)
left_btn.addEventListener("click",preslider)
popContainer.addEventListener("click",function(e){
    if (e.target === popContainer) {
        popContainer.style.display = "none";
    }
    
})
this.addEventListener("keydown",function(e){
    if(e.keyCode === 27 ){
        closeTab();
    }
    else if (e.keyCode === 39){
        nextslider()
    }
    else if (e.keyCode === 37){
        preslider() 
    }
    else if(e.keyCode === 32){
       popContainer.style.display = "flex"
    }
})
function nextslider(){
currentIndex = (currentIndex + 1 ) % img.length;
popImg.src = img[currentIndex]
}
function preslider(){
currentIndex = (currentIndex - 1 + img.length ) % img.length
popImg.src = img[currentIndex]
   
}

function closeTab(){
    popContainer.style.display = "none"
}

