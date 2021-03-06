const data = {
  books: [ 
    // n - name, l - link
    // {n: "", l: ""},
  ],
  task: false,
  question: [ 
    // q - question, i - image, a - answer
    { q: "REST", i: false, a: [
      "Representation State Transfer"
    ]},
    { q: "Meta-data(мета-дата)", i: false, a: [
      "Мета дата несет в себе информацию о главной дате",
      "мета дата используеться в HTTP Document в Head",
    ] },
    { q: "Поиск по сети", i: false, a: [
      "user agent(Browser) -> internet -> server",
      "В браузере сначала работает прерывание от клавиатуры, а потом CPU обрабатывает его, создает ивент и отправляет в браузер через viewport",
      "В браузере она печатается(для интерактивной работы с браузером)",
      "",
      "Далее адресс передаеться в интернет чтобы понять что это за адрес.",
      "От туда получает IP(Internet Protocol) и перенаправляеться по этому адресу",
    ] },
    { q: "HTTP Document", i: false, a: [
      "HTTP - Hyper Text Transfer Protocol",
      "Документ, который отправляется/получается во время клиент-серверного запроса",
      "В него входит мета-дата(Head) и дата(Body)",
      "Мета дата несет в себе информацию о главной дате.",
      "В Head передается сама информация",
      "",
      "При получении HTTP Document происходит 3 процесса:",
      "1. parse",
      "2. render",
      "4. donload",
    ] },
    { q: "URL", i: false, a: [
      "URL - Uniform Resaurce Locator",
    ] },
    { q: "DNS", i: false, a: [
      "DNS - Domain Name System",
    ] },
    { q: "TCP/UDP", i: "TCP", a: [
      "TCP - Transmission Control Protocol",
      "Надежный протокол (reliable)",
      "Всегда убеждается что сервер/клиент услышал его. Времязатратное соединение",
      "Применяется при передаче данных банков, логин паролей и т.д.",
      "кароче говоря: чувствителен к потере данных",
      "",
      "Когда клиент связываеться с сервером в протоколе TCP это называеться syn",
      "А когда сервер отвечает - syn ack",
      "",
      "------",
      "",
      "UDP - User Datagram Protocol",
      "Не надежный протокол (non-reliable)",
      "Такой протокол не ждет ответа, он отправляет данные и не ожидает ответа",
      "Такой подход быстр, но не безопасен. Так как возможны потери данных",
      "Этот подход используют когда нету времени для отклика.",
      "Например в голосовых собщениях, воспроизведения видеоролика в интернете",
      "Если по пути потеряеться кадр, или в разговоре пропадет голос собеседника на 3 милисекунды, мы не заметим это и все равно поймем что он говорит",
    ] },
  ],
}
