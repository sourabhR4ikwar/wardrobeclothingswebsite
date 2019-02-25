var scrollObject = {};

window.addEventListener('scroll',function(){
  scrollObject = {
    x: window.pageXOffset,
    y: window.pageYOffset
  }

  if(scrollObject.y > 150){
    document.getElementById("nav").classList.add("fixed-top");
    document.getElementById("brand").classList.add("width0");
  }
  else{
    document.getElementById("nav").classList.remove("fixed-top");
    document.getElementById("brand").classList.remove("width0");
  }
});
