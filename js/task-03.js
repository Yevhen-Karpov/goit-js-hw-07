const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesContainer = document.querySelector('ul#gallery');

imagesContainer.style.display = "flex";
imagesContainer.style.justifyContent = "space-around";
imagesContainer.style.padding = "0"


const imageElements = images.reduce((string, image) => string + `<img src = ${image.url} alt = ${image.alt} width = 320 height = 240 </img>`, " ")

imagesContainer.insertAdjacentHTML('afterbegin', imageElements)
