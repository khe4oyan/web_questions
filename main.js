main();

function main(){
  const question_box = document.createElement("div");
  question_box.classList.add("container");
  for(let i = 0; i < data.question.length; ++i){
    const det = document.createElement("details");
    const summ = document.createElement("summary");
    
    if(data.question[i].i != false){
      if(Array.isArray(data.question[i].i)){
        for(let k = 0; k < data.question[i].i.length(); ++k){
          const img = new Image;
          img.src = "img/" + data.question[i].i[k] + ".png";
          det.appendChild(img);
        }
      }else{

      }
      const img = new Image;
      img.src = "img/" + data.question[i].i + ".png";
      det.appendChild(img);
    }

    summ.textContent = data.question[i].q;
    det.appendChild(summ);
    
    if(data.question[i].a != false){
      if(Array.isArray(data.question[i].a)){
        for(let l = 0; l < data.question[i].a.length; ++l){
          const p = document.createElement("p");
          p.innerText = data.question[i].a[l];
          det.appendChild(p);
        }
      }else{
        const p = document.createElement("p");
        p.innerHTML = data.question[i].a;
        det.appendChild(p);
      }
    }

    question_box.appendChild(det);
  }

  document.body.appendChild(question_box);
} 