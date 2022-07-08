const container = document.createElement("div");
container.classList.add('container');

const pages = [
  "Lecture 1: Essential Low-Level Concepts. Act 1",
  "Lecture 2: Essential Low-Level Concepts. Act 2",
  "Lecture 3: at High-Level to Low-Level",
  "Lecture 4: Practice",
];

show_pages();

function show_pages(){
  for(let i = pages.length - 1; i >= 0; --i){
    const link = document.createElement('a');
    
    link.textContent = pages[i];
    link.href = "web/less_" + (i + 1) + "/less.html";

    container.appendChild(link);
  }
}

document.body.appendChild(container);