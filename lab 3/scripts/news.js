// news.js

// Масив зі статичними новинами
let newsArray = [
    {
        title: "Відкриття нового курсу з граматики",
        description: "З радістю оголошуємо про відкриття нового курсу з граматики української мови. Деталі та реєстрація на нашому веб-сайті.",
        date: "2024-03-23"
    },
    {
        title: "Знижка на інтенсивний курс",
        description: "Спеціальна пропозиція - знижка 20% на інтенсивний курс української мови для початківців. Дізнайтеся більше на нашому веб-сайті.",
        date: "2024-03-22"
    },
    {
        title: "Оголошення результатів тестування",
        description: "Оголошуємо результати тестування на рівень володіння українською мовою. Перевірте свої знання на нашому веб-сайті.",
        date: "2024-03-21"
    }
];

// Функція для відображення новин на сторінці
function displayNews() {
    // Сортування новин за датою додавання
    newsArray.sort((a, b) => new Date(b.date) - new Date(a.date));

    let newsList = document.getElementById("newsList");
    newsList.innerHTML = "";

    newsArray.forEach(function(news) {
        let newsItem = document.createElement("li");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <h6>${news.title}</h6>
            <p>${news.description}</p>
            <small>${news.date}</small>`;
        newsList.appendChild(newsItem);
    });
}

// Відображення новин при завантаженні сторінки
displayNews();

