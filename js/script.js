let options = {
    offset: 500
  }
let header = new Headhesive('.header',options);

let link = document.querySelector(".navbar-link");
link.addEventListener("click",()=>{
  link.classList.toggle("active");

  if (link.classList.contains("active")) {
    link.style.display = "block";
  } else {
    link.style.display = "none";
  }
})
header.destroy();