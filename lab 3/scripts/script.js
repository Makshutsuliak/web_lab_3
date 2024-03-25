let products = [
    {
        id: 1, 
        department: "Кафедра Лінгвістики",
        title: "Професійна Українська: Для Роботи та Бізнесу",
        description: "У цьому поглибленому курсі студенти розглянуть спеціалізований матеріал, який включає:",
        details: [
            "Бізнес-лексику та комунікативні навички для роботи в українськомовному середовищі.",
            "Професійне письмо, включаючи електронну пошту та ділові листи.",
            "Специфічні терміни та поняття в обраній галузі роботи."
        ],
        purchases: 40,
        originalPrice: 500,
        discountedPrice: 300,
        durationHours: 60,
        lessons: 80,
        level: "Прогресивний",
        button: "Перейти до покупки"
    },
    {
        id: 2,
        department: "Кафедра Культурології",
        title: "Українська Література та Культура",
        description: "Цей курс дозволить студентам поглибити знання української культури, включаючи:",
        details: [
            "Вивчення творів відомих українських письменників.",
            "Аналіз текстів, обговорення тем та символіки.",
            "Ознайомлення з історією України та важливими культурними подіями."
        ],
        purchases: 23,
        originalPrice: 400,
        discountedPrice: 250,
        durationHours: 45,
        lessons: 60,
        level: "Прогресивний",
        button: "Перейти до покупки"
    },
    {
        id: 3,
        department: "Кафедра Лінгвістики",
        title: "Мовна Майстерність: Вивчення Української Мови для Високого Рівня",
        description: "Цей інтенсивний курс призначений для досягнення високого рівня володіння українською мовою і включає:",
        details: [
            "Глибше вивчення граматики та стилістики.",
            "Академічне письмо, включаючи есе та дослідницькі роботи.",
            "Підготовку до мовних іспитів або сертифікаційних випробувань."
        ],
        purchases: 52,
        originalPrice: 800,
        discountedPrice: 500,
        durationHours: 80,
        lessons: 120,
        level: "Прогресивний",
        button: "Перейти до покупки"
    },
      
    {
        id: 4,
        department: "Кафедра Мовознавства",
        title: "Українська Граматика: Основи",
        description: "Цей курс допоможе студентам засвоїти основи української граматики. Він включає в себе вивчення частин мови та їх функцій, відмінювання і сполучення слів, правила вживання часів та відмінкових форм, а також відпрацювання письмових навичок через написання текстів.",
        details: [
            
            "Частини мови та їх функції.",
            "Відмінювання і сполучення слів.",
            "Правила вживання часів та відмінкових форм.",
           "Відпрацювання письмових навичок через написання текстів."
        ],
        purchases: 28,
        originalPrice: 250,
        discountedPrice: 150,
        durationHours: 30,
        lessons: 40,
        level: "Прогресивний",
        button: "Перейти до покупки",
        imageSrc: "../images/courses5.svg"
    },

    {
        id: 5,
        department: "Кафедра Мовознавства",
        title: "Курс Розмовної Української Мови для Початківців",
        description: "Цей курс спрямований на розвиток навичок розмовного спілкування. Студенти навчаться виразно та правильно вимовляти слова та фрази, вести діалоги на різні теми, включаючи подорожі, їжу та щоденні справи, відповідати на питання та виражати свої думки українською мовою.",
        details: [
            "Виразно та правильно вимовляти слова та фрази.",
            "Вести діалоги на різні теми, включаючи подорожі, їжу та щоденні справи.",
            "Відповідати на питання та виражати свої думки українською мовою."
        ],
        purchases: 46,
        originalPrice: 150,
        discountedPrice: 75,
        durationHours: 15,
        lessons: 20,
        level: "Прогресивний",
        button: "Перейти до покупки",
        imageSrc: "../images/courses5.svg"
    },
    {
        id: 6,
        department: "Кафедра Мовознавства",
        title: "Основи Української Мови (Початковий Рівень)",
        description: "У цьому курсі студенти отримають загальне уявлення про українську мову. Матеріал включає в себе основи граматики та правила вживання, прості фрази та вирази для повсякденного спілкування, читання та аудіювання текстів для розуміння загального змісту, відпрацювання навичок усного та письмового мовлення.",
        details: [
            "Основи граматики та правила вживання.",
            "Прості фрази та вирази для повсякденного спілкування.",
            "Читання та аудіювання текстів для розуміння загального змісту.",
            "Відпрацювання навичок усного та письмового мовлення.."
        ],
        purchases: 75,
        originalPrice: 200,
        discountedPrice: 100,
        durationHours: 20,
        lessons: 28,
        level: "Прогресивний",
        button: "Перейти до покупки",
        imageSrc: "../images/courses5.svg"
    },    

];
loadProducts(null);
sessionStorage.setItem('cartItems', "[]");


function filterCourses(department) {
    loadProducts(department);
}

function loadProducts(department) {
    let list = document.getElementById('produc-list');
    let productElements = '';
    let coursesFiltered;
    if (department) {
        coursesFiltered = products.filter(course => course.department === department);
    } else {
        coursesFiltered = products;
    }
    coursesFiltered.forEach(course => {
        let details = '';
        course.details.forEach(detail => {
            details += `<li>
                          <p>${detail}</p>
                        </li>`;
        });

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <g clip-path="url(#clip0_1_162)">
                        <path d="M1 9.8999C1.13261 9.8999 1.25979 9.95258 1.35355 10.0463C1.44732 10.1401 1.5 10.2673 1.5 10.3999V12.8999C1.5 13.1651 1.60536 13.4195 1.79289 13.607C1.98043 13.7945 2.23478 13.8999 2.5 13.8999H14.5C14.7652 13.8999 15.0196 13.7945 15.2071 13.607C15.3946 13.4195 15.5 13.1651 15.5 12.8999V10.3999C15.5 10.2673 15.5527 10.1401 15.6464 10.0463C15.7402 9.95258 15.8674 9.8999 16 9.8999C16.1326 9.8999 16.2598 9.95258 16.3536 10.0463C16.4473 10.1401 16.5 10.2673 16.5 10.3999V12.8999C16.5 13.4303 16.2893 13.939 15.9142 14.3141C15.5391 14.6892 15.0304 14.8999 14.5 14.8999H2.5C1.96957 14.8999 1.46086 14.6892 1.08579 14.3141C0.710714 13.939 0.5 13.4303 0.5 12.8999V10.3999C0.5 10.2673 0.552678 10.1401 0.646447 10.0463C0.740215 9.95258 0.867392 9.8999 1 9.8999Z" fill="#737373" />
                        <path d="M8.14663 11.854C8.19308 11.9006 8.24825 11.9375 8.309 11.9627C8.36974 11.9879 8.43486 12.0009 8.50063 12.0009C8.5664 12.0009 8.63152 11.9879 8.69227 11.9627C8.75301 11.9375 8.80819 11.9006 8.85463 11.854L11.8546 8.854C11.9485 8.76011 12.0013 8.63278 12.0013 8.5C12.0013 8.36722 11.9485 8.23989 11.8546 8.146C11.7607 8.05211 11.6334 7.99937 11.5006 7.99937C11.3679 7.99937 11.2405 8.05211 11.1466 8.146L9.00063 10.293V1.5C9.00063 1.36739 8.94795 1.24021 8.85419 1.14645C8.76042 1.05268 8.63324 1 8.50063 1C8.36802 1 8.24085 1.05268 8.14708 1.14645C8.05331 1.24021 8.00063 1.36739 8.00063 1.5V10.293L5.85463 8.146C5.76075 8.05211 5.63341 7.99937 5.50063 7.99937C5.36786 7.99937 5.24052 8.05211 5.14663 8.146C5.05275 8.23989 5 8.36722 5 8.5C5 8.63278 5.05275 8.76011 5.14663 8.854L8.14663 11.854Z" fill="#737373" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_162">
                          <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>${course.purchases} покупок</p>`;

        let li = `<li>
                    <p class="course_depatrment">${course.department}</p>
                    <h5>${course.title}</h5>
                    <p>${course.description}</p>
                    <ul class="course_info">${details}</ul>
                    <div>${svg}</div>
                    <del>$${course.originalPrice}</del> <ins>$${course.discountedPrice}</ins>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z" fill="#23A6F0" />
                            </svg>
                            <small>${course.durationHours} годин</small>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M15 3.307L14.3425 3.5255C13.4214 3.81404 12.4649 3.97373 11.5 4C10.633 4 9.839 3.5465 8.998 3.066C8.081 2.542 7.133 2 6 2C4.5615 2 2.9575 3.103 2 3.886V1H1V14C1.00026 14.2651 1.10571 14.5193 1.29319 14.7068C1.48066 14.8943 1.73486 14.9997 2 15H15V3.307ZM2 10.147C2.937 8.688 4.78 6.5 6 6.5C6.819 6.5 7.48 7.051 8.18 7.6345C8.9485 8.2745 9.819 9 11 9C12.118 8.94638 13.1809 8.49837 14 7.7355V10.2135C13.0781 10.7138 12.0488 10.9837 11 11C10.1978 10.9786 9.40531 10.8181 8.658 10.5255C7.80921 10.1974 6.90978 10.0196 6 10C4.5365 10 2.966 11.4795 2 12.579V10.147ZM6 3C6.867 3 7.661 3.4535 8.502 3.934C9.419 4.458 10.367 5 11.5 5C12.3438 4.98583 13.1829 4.87204 14 4.661V6.3215C13.6585 6.723 12.458 8 11 8C10.181 8 9.52 7.449 8.82 6.8655C8.0515 6.2255 7.181 5.5 6 5.5C4.532 5.5 2.9685 7.17 2 8.4225V5.212C2.773 4.483 4.6295 3 6 3ZM2.1245 14C2.931 12.9545 4.705 11 6 11C6.80225 11.0214 7.59469 11.1819 8.342 11.4745C9.19079 11.8026 10.0902 11.9804 11 12C12.036 11.9901 13.0582 11.7618 14 11.33V14H2.1245Z" fill="#E77C40" />
                            </svg>
                            <small>${course.lessons} уроків</small>
                        </li>
                        <li>
                            <img src="../images/courses5.svg">
                            <small>${course.level}</small>
                        </li>
                    </ul>
                    <button onclick='addProductToCart(${course.id})' class="button_detailed">Додати в кошик</button>
                </li>`;
        productElements += li;
    });
    list.innerHTML = productElements;
}

let cart = []; 
setTimeout(() => {
    let floatingWindow = document.getElementById('floating-window');
    floatingWindow.style.display = 'flex'; 
}, 15000
);

loadProducts();
document.addEventListener('DOMContentLoaded', function () {
    let floatingWindow = document.getElementById('floating-window');
    let closeButton = document.getElementById('close-button');

    closeButton.addEventListener('click', function () {
        floatingWindow.style.display = 'none';
    });
});
let nonModal = document.getElementById("subscriptionOffer");
let hasAcceptedSubscription = localStorage.getItem("subscriptionAccepted");

window.onload = function() {
    if (!hasAcceptedSubscription) {
        setTimeout(function() {
            nonModal.style.display = "block";
        }, 5000); 
    }
}

let acceptButton = document.getElementById("acceptSubscription");

let rejectButton = document.getElementById("rejectSubscription");
acceptButton.onclick = function() {
    nonModal.style.display = "none";
    localStorage.setItem("subscriptionAccepted", "true");
  alert("Дякуємо за підписку!");
}
rejectButton.onclick = function() {
    nonModal.style.display = "none";
}
function addProductToCart(productId){
    const product = products.find(item => item.id === productId);
    if (product) {
        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        // Перевіряємо, чи продукт ще не додано до кошика
        if (!cartItems.some(item => item.id === productId)) {
            cartItems.push({ id: productId, quantity: 1 });
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));      
            
        } else {
            console.log('Product is already in cart:', product);
        }
    }
}
function openCart() {
  let cartItems = document.getElementById('cart-items');
  let containerHtml = '';

  // Отримуємо дані кошика з sessionStorage
  let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];

  // Вивід елемента кошику (меню)
  cartItemsData.forEach(cartItem => {
      const product = products.find(product => product.id === cartItem.id);
      if (product) {
          containerHtml += `
      <div class="cart-item">
          <h6>${product.title}</h6>         
                    <p>Ціна: ${product.discountedPrice * cartItem.quantity}</p>
          <div class="quantity-controls">
              <button class="decrease-quantity" onclick="decreaseQuantity(${product.id})">-</button>
              <span class="quantity">${cartItem.quantity}</span>
              <button class="increase-quantity" onclick="increaseQuantity(${product.id})">+</button>
          <button class="remove-item" onclick="removeItem(${product.id})">Видалити</button>
          </div>
      </div>`;
      }
  });
  
  containerHtml += `
  <button class="sort-button" onclick="sortByName()">Сортувати за назвою</button>
  <button class="sort-button" onclick="sortByPriceAscending()">Сортувати за зростанням ціни</button>
  <button class="sort-button" onclick="sortByPriceDescending()">Сортувати за спаданням ціни</button>`;
  containerHtml += `<button class="order-button" onclick="placeOrder()">Замовити</button>`;

  //лічильник загальної суми
  containerHtml += `<div id="total-price"></div>`;
  cartItems.innerHTML = containerHtml;
  // Оновити загальну суму
  updateTotalPrice();
  let cartDiv = document.getElementById('cart');
    cartDiv.style.display = 'block   ';
}


function closeCart(){
    let cartDiv = document.getElementById('cart');
    cartDiv.style.display = 'none';
}

function goToBuy(id){   
    localStorage.setItem("id_list", id);
    let id_l = localStorage.getItem("id_list");
    window.location.href = "pricing.html";
    let dropdown = document.getElementById("course");
    dropdown.value = id_l;     
}

function sortByName() {
  let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  cartItemsData.sort((a, b) => {
      const productA = products.find(product => product.id === a.id);
      const productB = products.find(product => product.id === b.id);
      const totalPriceA = productA.discountedPrice * a.quantity;
      const totalPriceB = productB.discountedPrice * b.quantity;
      return productA.title.localeCompare(productB.title);
  });
  sessionStorage.setItem('cartItems', JSON.stringify(cartItemsData));
  openCart();
}

//Сортування за зростаннням цін
function sortByPriceAscending() {
  let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  cartItemsData.sort((a, b) => {
    const productA = products.find(product => product.id === a.id);
    const productB = products.find(product => product.id === b.id);
    const totalPriceA = productA.discountedPrice * a.quantity;
    const totalPriceB = productB.discountedPrice * b.quantity;
      return totalPriceA - totalPriceB;
  });
  sessionStorage.setItem('cartItems', JSON.stringify(cartItemsData));
  openCart();
}

// Сортування за спаданням цін
function sortByPriceDescending() {
  let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  cartItemsData.sort((a, b) => {
    const productA = products.find(product => product.id === a.id);
    const productB = products.find(product => product.id === b.id);
    const totalPriceA = productA.discountedPrice * a.quantity;
    const totalPriceB = productB.discountedPrice * b.quantity;
      return totalPriceB - totalPriceA;
  });
  sessionStorage.setItem('cartItems', JSON.stringify(cartItemsData));
  openCart();
}

// Оновлення загальної суми 
function updateTotalPrice() {
  let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  let totalPrice = cartItemsData.reduce((total, cartItem) => {
      const product = products.find(product => product.id === cartItem.id);
      if (product) {
          return total + (product.discountedPrice * cartItem.quantity);
      }
      return total;
  }, 0);
  document.getElementById('total-price').textContent = `Загальна сума: ${totalPrice} $`;
}

// Загальне замовлення
function placeOrder() {
  let cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  let totalPrice = cartItemsData.reduce((total, cartItem) => {
      const product = products.find(product => product.id === cartItem.id);
      if (product) {
          return total + (product.price * cartItem.quantity);
      }
      return total;
  }, 0);
  alert(`Ваше замовлення прийнято. Загальна сума: ${totalPrice} грн. Дякуємо за покупку!`);
  sessionStorage.removeItem('cartItems'); // Очистити кошик після замовлення
  openCart(); // Оновити відображення кошика
}


// Видалити продукт 
function removeItem(productId) {
  let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  let updatedCartItems = cartItems.filter(item => item.id !== productId);
  sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  openCart(); // Оновлення відображення кошика
}

// Збільшення на n одиниць товару
function increaseQuantity(productId) {
  let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  let productIndex = cartItems.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
      cartItems[productIndex].quantity++;
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
      openCart(); // Оновлення відображення кошика
  }
}

// Зменшення на n одиниць товару
function decreaseQuantity(productId) {
  let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  let productIndex = cartItems.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
      if (cartItems[productIndex].quantity > 1) {
          cartItems[productIndex].quantity--;
          sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
          openCart(); // Оновлення відображення кошика
      }
  }
}

// ГРАФІКИ 
document.addEventListener('DOMContentLoaded', function () {
  // ІД для конпок
  const pieChartButton = document.getElementById('pieChartButton');
  const histogramButton = document.getElementById('histogramButton');
  const lineChartButton = document.getElementById('lineChartButton');

  let currentChart = null; // посилання на поточний графік

  pieChartButton.addEventListener('click', function () {
      if (currentChart) {
          currentChart.destroy(); // Видаляємо попередній графік перед оновленням
      }
      updateCharts('pie');
  });

  histogramButton.addEventListener('click', function () {
      if (currentChart) {
          currentChart.destroy();
      }
      updateCharts('histogram');
  });

  lineChartButton.addEventListener('click', function () {
      if (currentChart) {
          currentChart.destroy(); 
      }
      updateCharts('line');
  });

  function updateCharts(type) {
      const cartItemsData = JSON.parse(sessionStorage.getItem('cartItems')) || [];
      const productQuantities = countProductQuantities(cartItemsData);
      const productNames = getProductNames(cartItemsData);

      let chartConfig;

      if (type === 'pie') {
          chartConfig = {
              type: 'pie',
              data: {
                  labels: productNames,
                  datasets: [{
                      data: productQuantities,
                      backgroundColor: generateRandomColors(productNames.length),
                      borderWidth: 1
                  }]
              },
              options: {
                  width: 300, 
                  height: 200 
              }
          };
          const pieCanvas = document.getElementById('pieChartCanvas').getContext('2d');
          currentChart = new Chart(pieCanvas, chartConfig);

      } else if (type === 'histogram') {
          chartConfig = {
              type: 'bar',
              data: {
                  labels: productNames,
                  datasets: [{
                      data: productQuantities,
                      backgroundColor: generateRandomColors(productNames.length),
                      borderWidth: 1
                  }]
              },
              options: {
                  width:  700, 
                  height: 500
              }
          };
          const histogramCanvas = document.getElementById('histogramCanvas').getContext('2d');
          currentChart = new Chart(histogramCanvas, chartConfig);

      } else if (type === 'line') {
          chartConfig = {
              type: 'line',
              data: {
                  labels: productNames,
                  datasets: [{
                      data: productQuantities,
                      backgroundColor: 'rgba(54, 162, 235, 0.2)',
                      borderColor: 'rgba(54, 162, 235, 1)',
                      borderWidth: 1
                  }]
              },
              options: {
                  width: 700, 
                  height: 500
              }
          };
          const lineChartCanvas = document.getElementById('lineChartCanvas').getContext('2d');
          currentChart = new Chart(lineChartCanvas, chartConfig);
      }
  }
});

// К-сть товарів одного типу
function countProductQuantities(cartItemsData) {
  const quantitiesMap = {};
  cartItemsData.forEach(item => {
      quantitiesMap[item.id] = (quantitiesMap[item.id] || 0) + item.quantity;
  });
  return Object.values(quantitiesMap);
}

// ПОшук товарів
function getProductNames(cartItemsData) {
  const productNames = [];
  cartItemsData.forEach(item => {
      const product = products.find(product => product.id === item.id);
      if (product) {
          productNames.push(product.title);
      }
  });
  return productNames;
}

// Рандомний колір
function generateRandomColors(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
      colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`);
  }
  return colors;
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > (document.body.scrollHeight/3) || document.documentElement.scrollTop > (document.body.scrollHeight/3)) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

