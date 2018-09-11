const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const image = document.getElementById('image');
let slide = 0;
const images = [
  ['fling.gif', 'fling'],
  ['impact.gif', 'impact'],
  ['magnify.gif', 'magnify'],
  ['shuffle.gif', 'shuffle'],
  ['squish.gif', 'squish'],
  ['volcano.gif', 'volcano']
];

image.innerHTML = `<img src="img/${images[slide][0]}" alt="${
  images[slide][1]
}">`;

nextBtn.addEventListener('click', e => {
  if (slide < images.length - 1) {
    slide++;
    image.innerHTML = `<img src="img/${images[slide][0]}" alt="${
      images[slide][1]
    }">`;
  } else {
    slide = 0;
    image.innerHTML = `<img src="img/${images[slide][0]}" alt="${
      images[slide][1]
    }">`;
  }
});
prevBtn.addEventListener('click', e => {
  if (slide > 0) {
    slide--;
    image.innerHTML = `<img src="img/${images[slide][0]}" alt="${
      images[slide][1]
    }">`;
  } else {
    slide = images.length - 1;
    image.innerHTML = `<img src="img/${images[slide][0]}" alt="${
      images[slide][1]
    }">`;
  }
});
