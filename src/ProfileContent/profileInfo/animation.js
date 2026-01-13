function handelHover(index) {
  const underlineElement = document.getElementById("underline");
  if (underlineElement) {
    if(index == 1)
        underlineElement.style.transform = "translateX(170px)"; // Adjust distance as needed
    else if(index == 2)
        underlineElement.style.transform = "translateX(340px)"; // Adjust distance as needed
    else if(index == 3)
        underlineElement.style.transform = "translateX(510px)"; 
    else
        underlineElement.style.transform = "translateX(0px)";
  }
}

export default handelHover;