
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
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
      'https://cdn.pixabay.com/photo/2019/05/15/18/59/port-4203487__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/15/18/59/port-4203487_1280.jpg',
    description: 'Container Ship',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/35/sunset-4209230__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/35/sunset-4209230_1280.jpg',
    description: 'Sunset Sky',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/33/mountain-4210579__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/33/mountain-4210579_1280.jpg',
    description: 'Mountain Peaks',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/13/07/tree-4207431__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/13/07/tree-4207431_1280.jpg',
    description: 'Green Tree',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/12/22/river-4211426__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/12/22/river-4211426_1280.jpg',
    description: 'River in Forest',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/15/10/33/flower-4202983__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/15/10/33/flower-4202983_1280.jpg',
    description: 'Pink Flowers',
  },
];


const galleryContainer = document.querySelector('.gallery');


const galleryMarkup = images.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');


galleryContainer.innerHTML = galleryMarkup;


function openModal(imageURL) {
  const instance = basicLightbox.create(`
    <img src="${imageURL}" width="800" height="600">
  `);
  instance.show();
}


galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault(); 
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  
  const largeImageURL = event.target.dataset.source;

  
  openModal(largeImageURL);
}
