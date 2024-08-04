const data = {
  products: [
    {
      id: 1,
      name: 'Шапка',
      img: '/img/product3.jpg',
    },
    {
      id: 2,
      name: 'Шапка',
      img: './img/product3.jpg',
    },
    {
      id: 3,  
      name: 'Шапка',
      img: './img/product3.jpg',
    },
    { 
      id: 4,
      name: 'Шапка',
      img: './img/product3.jpg',
    },
    {
      id: 5,
      name: 'Шапка',
      img: './img/product3.jpg',
    },
    {
      id: 6,
      name: 'Шапка',
      img: './img/product3.jpg',
    }
  ]

}

function render() {
  const products = data.products;

  // Получаем контейнер для карточек
  const slider = document.querySelector('.slider');

  products.forEach(product => {
    // Создаем основную карточку
    const card = document.createElement('div');
    card.classList.add('card');

    // Создаем элемент изображения
    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.name;
    card.appendChild(img);

    // Создаем внутреннюю часть карточки
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    // Создаем голову карточки
    const cardHead = document.createElement('div');
    cardHead.classList.add('card-head');

    // Создаем элементы для названия и цены
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('cardtitle');
    cardTitle.textContent = product.name;

    const cardPrice = document.createElement('div');
    cardPrice.classList.add('cardprice');
    cardPrice.textContent = 'Цена'; // Здесь должна быть логика для отображения цены

    // Добавляем элементы в голову карточки
    cardHead.appendChild(cardTitle);
    cardHead.appendChild(cardPrice);
    cardInner.appendChild(cardHead);

    // Создаем нижнюю часть карточки
    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom');

    // Создаем кнопку заказа
    const orderButton = document.createElement('button');
    orderButton.classList.add('order-button');
    orderButton.innerHTML = '<span>Заказать</span>';

    // Добавляем кнопку в нижнюю часть карточки
    cardBottom.appendChild(orderButton);
    cardInner.appendChild(cardBottom);

    // Добавляем внутреннюю часть карточки в основную карточку
    card.appendChild(cardInner);

    // Добавляем карточку в контейнер
    slider.appendChild(card);
  });
}

render();
