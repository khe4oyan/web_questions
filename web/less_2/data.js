const data = {
  books: [ // n - name, l - link
    {n: "Stevanovic, Advanced C and C++ Compiling ", l: "https://drive.google.com/file/d/1krV3tEoII7zd3026LUtS8WE7z0gbIrvv/view?usp=sharing"},
    {n: "Bryant, O’Hallaron, Computer Systems", l:"https://drive.google.com/file/d/14E3r9mPQVthb33mq8xWXF--GZHpxuptY/view?usp=sharing"},
    {n: "Silberschatz, Operating System Concepts", l:"https://drive.google.com/file/d/1MvxpHbRfBc-Ymt5DMHTlAMZntKpbUYvW/view?usp=sharing"},
    {n: "R. Love, Linux System Programming", l:"https://drive.google.com/file/d/1KOn-1KE92C3tI-ZoG2FPjO5_fjahXCWV/view?usp=sharing"},
    {n: "Joe Van Hoey, Beginning x64 Assembly Programming", l:"https://drive.google.com/file/d/1hu1Mw7kX-zcfrhxv2kbKflQcoCoQ2PBY/view?usp=sharing"},
  ],
  task:[
    "Van Hoey, chapter 1 (10 pages)", 
    "Stevanovic, chapters 1-3 (50 pages)", 
    "Bryant, chapter 3.7 Procedures (17 pages)", 
    "Bryant, chapter 7 Linking (50 pages) [skim over]", 
    "Silberschatz, chapters 1-2 Intro to OS (50 pages out of 100) [quick read]", 
    "R. Love, chapter 1 Introduction and Essential Concepts (25 pages)", 
  ],
  question: [ // q - question, i - image, a - answer
    // {q: "", i: false, a: false},
    {q: "API", i: false, a: [
      "Aplication Programming Interface (Интерфейс Программирования Приложений)",
      "API обеспечивает абстракцию, предоставляя стандартный набор интерфейсов — как правило, это функции, — которые один программный компонент (обычно, но не обязательно это более высокоуровневый компонент из пары) может вызывать из другого (обычно более низкоуровневого)."
    ]},
    {q: "ABI", i: false, a: [
      "Aplication Binary Interface (двоичный интерфейс приложения)",
      "ABI определяет, как приложение взаимодействует с самим собой, с ядром и библиотеками."]
    },
    {q: "Memory hierarchy", i: "memory_hierarchy", a: false},
    {q: "CLR", i: false, a: "Common Language Runtime(общеязыковая исполняющая среда) C# Virtual Machine"},
    {q: "Dalvik", i: false, a: "..a Java Virtual Machine"},
    {q: "RVO", i: false, a: "Return Value Optimization"},
    {q: "Compilation(translation/build) Model", i: false, a: "Compiled(C++, C, Go, Pascal), Interpreted(JS, Java, bash, Lua), hybrid(JS, Java, Python, C#)"},
    {q: "Какие структуры есть в Ассемблере", i: "asm_struct", a: false},
    {q: "movq (in assembler)", i: false, a: "q -> quad word"},
    {q: "Compiling stages", i: false, a: [
      "1. lexical analysys", 
      "2. syntax analysys", 
      "3. semantic analysys", 
      "4. intermedian analysys", 
      "5. optimization", 
      "6. machine code generation", 
      "7. linking"]
    },
  {q: "rsp register", i: false, a: "stack pointer"},
  {q: "rip register", i: false, a: [
    "p -> PC(program counter) общий", 
    "eip(instruction pointer) специфический"]
  },
  {q: "section .txt", i: "section_txt", a: false},
  {q: "section .data variables", i: "section_data_vars", a: false},
  {q: "section .bss", i: "section_bss", a: false,},
  {q: "section .data", i: "section_data", a: false},
  {q: "section .bss const variables", i: "section_bss_const_vars", a: false},
],
}
