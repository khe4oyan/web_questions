const container = document.createElement("div");
container.classList.add('container');

const pages = [
  "L-1: Essential Low-Level Concepts. Act 1",
  "L-2: Numbers, negative numbers, floating-point representation",
  "L-3: Revisiting the basics",
  "L-4: Intro to Compilation and Program Execution",
];

show_pages();

function show_pages(){
  for(let i = pages.length - 1; i >= 0; --i){
    const link = document.createElement('a');
    
    link.innerHTML = pages[i];
    link.href = "web/less_" + (i + 1) + "/less.html";

    container.appendChild(link);
  }
}

document.body.appendChild(container);