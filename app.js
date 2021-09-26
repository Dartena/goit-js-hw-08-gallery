const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryRef = document.querySelector('ul.js-gallery');
const lightBoxRef = document.querySelector('div.js-lightbox');
const lightboxImgRef = document.querySelector('img.lightbox__image');
const closeButtonRef = document.querySelector('[data-action="close-lightbox"]');

const galleryItemsArr = galleryItems.map(item => {
  const galleryImg = document.createElement('img');
  const galleryLink = document.createElement('a');
  const galleryItem = document.createElement('li');
  galleryImg.src = item.preview;
  galleryImg.dataset.source = item.original;
  galleryImg.alt = item.description;
  galleryImg.classList.add('gallery__image');
  galleryLink.appendChild(galleryImg) ;
  galleryLink.classList.add('gallery__link');
  galleryLink.href = galleryImg.dataset.source;
  galleryItem.classList.add('gallery__item');
  galleryItem.appendChild(galleryLink);
  return galleryItem;
})

function closeLightboxByEsc(event){
  if (event.code !== 'Escape') return;
  closeLightbox();
}

function closeLightbox() {
  lightBoxRef.classList.remove('is-open');
  lightboxImgRef.src = ('');
  lightboxImgRef.alt = ('');
  window.removeEventListener('keydown', closeLightboxByEsc);
}

function seeFullImage(event) {
  event.preventDefault();
  if (event.target.matches('img')) {
    lightBoxRef.classList.add('is-open');
    lightboxImgRef.src = event.target.dataset.source;
    lightboxImgRef.alt = event.target.alt;
    window.addEventListener('keydown', closeLightboxByEsc);
  }
}

galleryRef.append(...galleryItemsArr);
galleryRef.addEventListener('click', seeFullImage);
lightBoxRef.addEventListener('click', closeLightbox);
