const data = {
  products: [
    { id: 6,
      name: 'Укороченная Оверсайз Футболка | Белая', 
      img: './img/products/uk_overs_men_white.jpg', 
      Price : 2100,
      btn : true,
      size : ['XS', 'S', 'M', 'L', 'XL'],
    },
    { id: 7,
      name: 'Укороченная Оверсайз Футболка | Черная', 
      img: './img/products/uk_overs_women_black.jpg', 
      Price : 2100,
      btn : false,
      size : ['XS', 'S', 'M', 'L', 'XL'],
    },
    { id: 1,
      name: 'Оверсайз Футболка', 
      img: './img/products/overs_fut_men.jpg', 
      Price : 4000,
      btn : true,
      size : ['XS', 'S', 'M', 'L', 'XL'],
    },
    { id: 2,
      name: 'Оверсайз рубашка хлопковая', 
      img: './img/products/rubashka_women.jpg', 
      Price : 5400,
      btn : false,
      size : ['S'],
    },
    { id: 3,
      name: 'Шоппер | в стиле Нити Души', 
      img: './img/products/shopper.jpg', 
      Price : 2100,
      btn : false,
      size : [],
    },
    { id: 4,
      name: 'Штаны |в стиле Нити Души', 
      img: './img/products/shtani_1.jpg', 
      Price : 4500,
      btn : false,
      size : ['M', 'L'],
    },
    { id: 5,
      name: 'Укороченная Оверсайз Футболка | Черная', 
      img: './img/products/uk_overs_men_black.jpg', 
      Price : 2100,
      btn : true,
      size : ['XS', 'S', 'M', 'L', 'XL'],
    },
    { id: 8,
      name: 'Укороченная Оверсайз Футболка | Белая', 
      img: './img/products/uk_overs_women_white.jpg', 
      Price : 2100,
      btn : false,
      size : ['XS', 'S', 'M', 'L', 'XL'],
    },
  ]
};

let currentIndex = 0;
let dotIndex = 0;
const slideWidth = 375;
const slideGap = 10;
const visibleSlides = 3;
const maxIndex = data.products.length - visibleSlides;
const totalDots = maxIndex + 1;
function render() {
  const products = data.products;
  const slider = document.querySelector('.slider');
  const buyingModalUnique = document.querySelector('.buyingModal-unique');
  const buyingModalContentUnique = document.querySelector('.buyingModal-content-unique');

  products.forEach((product, index) => {
    // Создаем карточку
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.name;
    card.appendChild(img);

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardHead = document.createElement('div');
    cardHead.classList.add('card-head');
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('cardtitle');
    cardTitle.textContent = product.name;
    const cardPrice = document.createElement('div');
    cardPrice.classList.add('cardprice');
    cardPrice.textContent = product.Price + ' ₽';

    cardHead.appendChild(cardTitle);
    cardHead.appendChild(cardPrice);
    cardInner.appendChild(cardHead);

    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom');
    const orderButton = document.createElement('button');
    orderButton.classList.add('order-button');

    if (product.btn === true) {
      orderButton.classList.add('white-btn');
    } else {
      orderButton.classList.add('black-btn');
    }
    orderButton.innerHTML = '<span>Заказать</span>';
    orderButton.setAttribute('onclick', `openModalUnique(${JSON.stringify(product)})`);
    cardBottom.appendChild(orderButton);
    cardInner.appendChild(cardBottom);

    card.appendChild(cardInner);
    slider.appendChild(card);
  });

  showSlide(currentIndex);
  updateDots();

  // Уникальная функция для открытия модального окна
  window.openModalUnique = function(product) {
    buyingModalContentUnique.innerHTML = '';

    const modalImg = document.createElement('img');
    modalImg.src = product.img;
    modalImg.alt = product.name;

    const modalTitle = document.createElement('div');
    modalTitle.textContent = product.name;

    const modalPrice = document.createElement('div');
    modalPrice.textContent = product.Price + ' ₽';

    buyingModalContentUnique.appendChild(modalImg);
    buyingModalContentUnique.appendChild(modalTitle);
    buyingModalContentUnique.appendChild(modalPrice);

    buyingModalUnique.style.display = 'block';
  }

  // Закрываем уникальное модальное окно при клике вне его
  window.addEventListener('click', (event) => {
    if (event.target == buyingModalUnique) {
      buyingModalUnique.style.display = 'none';
    }
  });
}



function showSlide(index) {
  const slider = document.querySelector('.slider');
  const totalOffset = (slideWidth + slideGap) * index;

  slider.style.transform = `translateX(-${totalOffset}px)`;
}

function nextSlide() {
  if (currentIndex >= maxIndex) {
    currentIndex = 0;
    dotIndex = 0;
  } else {
    currentIndex++;
    dotIndex = (dotIndex + 1) % totalDots;
  }
  showSlide(currentIndex);
  updateDots();
}

function prevSlide() {
  if (currentIndex <= 0) {
    currentIndex = maxIndex;
    dotIndex = maxIndex;
  } else {
    currentIndex--;
    dotIndex = (dotIndex - 1 + totalDots) % totalDots;
  }
  showSlide(currentIndex);
  updateDots();
}

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);

render();




// modal reg form

function openModal() {
  var modal = document.getElementById("orderModal");
  modal.style.display = "block";
  document.body.classList.add('no-scroll');
}

function closeModal(event) {
  var modal = document.getElementById("orderModal");
  if (event.target === modal || event.target.className === "close-button") {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll');
  }
}


// modal detail product



