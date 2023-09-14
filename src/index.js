import "./style.css";
import Home from "./modules/home";
import About from "./modules/about";
import Contact from "./modules/contact";
let curPage = "home";

const changePage = function (e) {
  if (this.textContent === "Home" && curPage != "home") return (curPage = Home().page);
  if (this.textContent === "About Us" && curPage != "aboutUs") return (curPage = About().page);
  if (this.textContent === "Contact" && curPage != "contact") return (curPage = Contact().page);
};

document.querySelectorAll(".header ul li").forEach((e) => e.addEventListener("click", changePage));
