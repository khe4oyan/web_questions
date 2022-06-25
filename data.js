const question = [
  // {quest: "", img: false, answer: false},
  {quest: "Какие структуры есть в Ассемблере", img: "asm_struct", answer: false},
  {quest: "section .txt", img: "section_txt", answer: false},
  {quest: "section .bss const variables", img: "section_bss_const_vars", answer: false},
  {quest: "section .bss", img: "section_bss", answer: false},
  {quest: "section .data variables", img: "section_data_vars", answer: false},
  {quest: "section .data", img: "section_data", answer: false},
];

main();

function main(){
  const question_box = document.createElement("div");

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
      p.innerText = question[i].answer;
      det.appendChild(p);
    }

    question_box.appendChild(det);
  }

  document.body.appendChild(question_box);
} 