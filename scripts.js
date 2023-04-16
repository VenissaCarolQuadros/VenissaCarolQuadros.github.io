const navLi = document.getElementById("navbarNavDropdown").querySelectorAll("ul li a");
const sections = document.querySelectorAll("section");
//console.log(navLi);
window.onscroll = () => {

  var current=window.location.hash;

  navLi.forEach((li) => {
    //console.log(li.classList);
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};