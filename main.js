const question_box = document.createElement("div");
question_box.classList.add("container");

create_books();
create_task();
create_questions();
document.body.appendChild(question_box);

function create_books(){
  if(data.books.length == 0 || data.books == false){
    return;
  }

  let books = data.books;

  const box = document.createElement('div');
  const header_text = document.createElement('h2');
  header_text.innerHTML = "Books (click in book name)";
  box.appendChild(header_text);

  box.classList.add('books__link');
  for(let i = 0; i < books.length; ++i){
    const a = document.createElement('a');
    
    a.innerText = books[i].n;
    a.href = books[i].l;
    a.target = "_blank";
    box.appendChild(a);
  }

  question_box.appendChild(box);
}

function create_task(){
  if(data.task.length == 0 || data.task == false){
    const empty_message = document.createElement("h2");
    empty_message.classList.add("empty__message");
    empty_message.innerText = "no tasks";
    question_box.appendChild(empty_message);
    return;
  }

  let task = data.task;
  const box = document.createElement('div');
  box.classList.add('task__list');

  const header_text = document.createElement('h2');
  header_text.innerHTML = "Task";
  box.appendChild(header_text);

  for(let i = 0; i < task.length; ++i){
    const p = document.createElement('p');
    p.innerText = task[i];
    box.appendChild(p);
  }

  question_box.appendChild(box);
}

function create_questions(){
  if(data.question.length == 0 || data.question == false){
    const empty_message = document.createElement("h2");
    empty_message.classList.add("empty__message");
    empty_message.innerText = "questions will be added later..";
    question_box.appendChild(empty_message);
    return;
  }

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
} 