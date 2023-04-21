// Массив с информацией о популярных режиссерах
const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

// добавляем новый массив, содержащий только лучшие фильмы каждого режиссера
const topFilmsList = directors.map((director) => director.top_rated_film);

// создаем заголовок
const titleElement = document.createElement("h2");
titleElement.textContent = "Лучшие фильмы этих режиссеров";
document.body.appendChild(titleElement);

// создаем список фильмов
const topFilmsListElement = document.createElement("ul");
topFilmsListElement.innerHTML = topFilmsList.join(", ");
document.body.appendChild(topFilmsListElement);

// Получаем ссылку на контейнер, в который будем добавлять информацию о режиссёрах
const directorsContainer = document.querySelector(".directors-container");

directors.forEach((director) => {
  // Создаем элемент-обертку для карточки режиссера
  const directorCard = document.createElement("div");
  directorCard.classList.add("director-card");

  // Добавляем имя режиссера
  const nameElement = document.createElement("div");
  nameElement.classList.add("name");

  // Добавляем описание карьеры режиссера
  const careerElement = document.createElement("div");
  careerElement.classList.add("career");

  // Добавляем ссылку на фильмографию режиссера
  const linkElement = document.createElement("a");
  linkElement.classList.add("link");

  // Заполняем элементы информацией из массива
  nameElement.textContent = director.name;
  careerElement.textContent = director.career;
  linkElement.textContent = "Фильмография";
  linkElement.href = director.films;

  // Добавляем элементы в родительский элемент
  directorCard.appendChild(nameElement); //Добавляем имя
  directorCard.appendChild(careerElement); //Добавляем описание
  directorCard.appendChild(linkElement); //Добавляем ccылку
  directorsContainer.appendChild(directorCard); // Добавляем карточку режиссера в контейнер
});
