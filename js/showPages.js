const container = document.createElement("div");
container.classList.add('container');

const pages = [
  "Essential Low-Level Concepts. Act 1",
  "Numbers, negative numbers, floating-point representation",
  "Revisiting the basics",
  "Intro to Compilation and Program Execution",
  "", // skip 5 less
  "Missed lesson",
  "Low level Request"
];

show_pages();

function show_pages(){
  for(let i = pages.length - 1; i >= 0; --i){
    if(pages[i] == ""){
      continue;
    }

    const link = document.createElement('a');
    
    link.innerHTML = "L" + (i + 1) + ": " + pages[i];
    link.href = "web/less_" + (i + 1) + "/less.html";

    container.appendChild(link);
  }
}

document.body.appendChild(container);