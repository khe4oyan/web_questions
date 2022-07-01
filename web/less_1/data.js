const data = {
  books:[
    {n: "Igor Zhirkov | Low-Level Programming", l: "https://drive.google.com/file/d/14xMV5ctX9i0Ng5SAY2HyqYMP7s9-S1VU/view?usp=sharing"},
    {n: "Bryant O’Hallaron | Computer Systems", l: "https://drive.google.com/file/d/14E3r9mPQVthb33mq8xWXF--GZHpxuptY/view?usp=sharing"},
    {n: "Joe Van Hoey | Beginning x64 Assembly Programming ", l: "https://drive.google.com/file/d/1hu1Mw7kX-zcfrhxv2kbKflQcoCoQ2PBY/view?usp=sharing"},
  ],
  task:[
    "Zhirkov, chapter 1 (14 pages)",
    "Bryant, Computer Systems chapters",
    "chapters 6.1, 6.2, 6.3, skim over 6.4, 6.5 (40 pages)",
    "chapter 2.2 Integer Representations (partially) (25 pages)",
    "chapters 3.3-3.4 Data Formats, Accessing Information (14 pages)",
    "chapter 3.8 Array Allocation and Access (10 pages)",
    "chapter 3.9 Heterogeneous Data Structures (11 pages)",
    "chapter 3.10.1 Understanding Pointers (2 pages)",
    "Van Hoey, chapter 1 (10+ pages)",
  ],
  question:[
    // {q: "", i: false, a: false},
    {q: "Сache miss", i: false, a: [
      "Промах кэша",
      "Каждую данную CPU сначала ищет в кэше. Если не находит там то это и называеться промахом кэша(cache miss)",
    ]},
    {q: "Locality of reference", i: false, a: [
      "Программы обычно пишутся таким образом, что они обладают одним определенным свойством. Это результат использования общих шаблонов программирования, таких как циклы, функции и повторное использование данных, а не какой-то закон природы.",
      "Это свойство называется locality of reference и существует два основных его типа: temporal(временно) и spatial(пространственный).",
      "Temporal locality(временная локальность) означает, что доступ к одному адресу, вероятно, будет близким во времени.",
      "Spatial locality(пространственная локальность) означает, что после доступа к адресу X следующий доступ к памяти, вероятно, будет близок к X (например, X - 16 или X + 28).",
    ]},
    {q: "Virtual Memory", i: false, a: [
      "Виртуальная память",
      "Это абстракция над физической памятью, которая помогает распределять ее между программами более безопасным и эффективным способом.",
      "Он также изолирует программы друг от друга."
    ]},
    {q: "Interrupts", i: false, a: [
      "Прерывание позволяет изменять порядок выполнения программы на основе событий, внешних по отношению к самой программе",
      "Ниже приведены примеры ситуаций, когда происходит прерывание",
      "- Сигнал от внешнего устройства.",
      "- Недопустимая инструкция (когда ЦП не смог распознать инструкцию по ее двоичному коду)",
      "- Попытка выполнить привилегированную инструкцию в непривилегированном режиме.",
    ]},
    {q: "Hardware Stack", i: false, a: [
      "Аппаратный стек",
      "Стек в общем случае представляет собой структуру данных.",
      "Он поддерживает две операции: push и pop.",
      "Аппаратный стек реализует эту абстракцию поверх памяти через специальные инструкции и регистры, указывающие на последний элемент стека.",
      "Стек используется не только в вычислениях, но для хранения локальных переменных и реализации последовательности вызовов функций в языках программировании.",
    ]},
    {q: "Register", i: false, a: [
      "Регистры это ячейки памяти, размещенные непосредственно на микросхеме ЦП. По схемам они намного быстрее, но они также более сложные и дорогие.",
      "Доступ к регистру не использует шину.",
      "Время отклика довольно мала и обычно равна паре циклов процессора."
    ]},
    {q: "Von Neumann architecture", i: "neuman_architecture", a: [
      "CPU - Central Processing Unit (ЦП - Центральный Процессор)",
      "CU - Control Unit (УУ - Устройство Управления)",
      "ALU - Arithmetic Logic Unit (АЛУ - Арифметическо Логическое Устройство)"
    ]}
  ],
}