main();

function main(){
  const question_box = document.createElement("div");
  question_box.classList.add("container");
  for(let i = 0; i < question.length; ++i){
    const det = document.createElement("details");
    const summ = document.createElement("summary");
    const p = document.createElement("p");
    
    if(question[i].img != false){
      const img = new Image;
      img.src = "img/" + question[i].img + ".png";
      det.appendChild(img);
    }

    summ.textContent = question[i].quest;
    det.appendChild(summ);
    
    if(question[i].answer != false){
      p.innerHTML = question[i].answer;
      det.appendChild(p);
    }

    question_box.appendChild(det);
  }

  document.body.appendChild(question_box);
} 