main();

function main(){
  const question_box = document.createElement("div");
  question_box.classList.add("container");
  for(let i = 0; i < question.length; ++i){
    const det = document.createElement("details");
    const summ = document.createElement("summary");
    const p = document.createElement("p");
    
    if(question[i].i != false){
      const img = new Image;
      img.src = "img/" + question[i].i + ".png";
      det.appendChild(img);
    }

    summ.textContent = question[i].q;
    det.appendChild(summ);
    
    if(question[i].a != false){
      p.innerHTML = question[i].a;
      det.appendChild(p);
    }

    question_box.appendChild(det);
  }

  document.body.appendChild(question_box);
} 