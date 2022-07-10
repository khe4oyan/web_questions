const header = document.querySelector("header");
const lastBlock = document.querySelector(".last");
const openBtn = document.querySelector(".last-open");
const closeBtn = document.querySelector(".last .close");

closeBtn.onclick = () =>{
  lastBlock.style.display = "none";
}

openBtn.onclick = function(){
  lastBlock.style.display = "grid";
};

lastBlock.style.display = "none";