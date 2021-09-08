const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulContainer = document.querySelector('ul#ingredients')

const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    
    return liEl;
});
ulContainer.append(...elements)