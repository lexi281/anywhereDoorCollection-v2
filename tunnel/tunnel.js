let pageTransitionLink = document.querySelector(".page-transition-link")
let backgroundImage = document.querySelector(".bg-image")

pageTransitionLink.onclick = function(event) {
  //trigger this code
  //prevent the user from going to the next page
  event.preventDefault()
  backgroundImage.classList.add("transition")
  //send the user to the next page using javascript
  setTimeout(goToNextPage, 1400) //2.5 seconds 1 sec = 1000ms
}

function goToNextPage() {
  window.location = pageTransitionLink.href;
}