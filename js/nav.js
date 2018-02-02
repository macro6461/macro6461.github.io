var navBar;
var navBarTop;
var ypos;

stickyNavBar = () => {

  navBar = document.getElementsByClassName("nav")[0]
  navBarTop = navBar.offsetTop
  console.log(navBarTop)
}

checkNavBar = () => {
  debugger
  ypos = window.pageYOffset
  if (ypos >= navBarTop){
    navBar.classList.remove("normal")
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky")
    navBar.classList.add("normal")
  }
}

document.addEventListener('DOMContentLoaded', function(){
  setTimeout(function(){
    stickyNavBar()
  }, 100)
})

document.addEventListener("scroll", checkNavBar)
