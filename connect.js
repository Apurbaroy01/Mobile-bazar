function addproducts() {
      document.getElementById('mainPage').classList.add('hidden');
      document.getElementById('confirmationPage').classList.remove('hidden');


}

function goBack() {
      document.getElementById('confirmationPage').classList.add('hidden');
      document.getElementById('mainPage').classList.remove('hidden');
}


const track = document.getElementById('carouselTrack');
  const carousel = document.getElementById('smoothCarousel');
  const slideWidth = carousel.offsetWidth;
  let index = 0;

  setInterval(() => {
    index++;
    if (index >= track.children.length) {
      index = 0;
    }
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }, 3000);


const tracks = document.getElementById('carouselTracks');
  const carousels = document.getElementById('smoothCarousels');
  const slideWidths = carousels.offsetWidth;
  let indexs = 0;

  setInterval(() => {
    indexs++;
    if (indexs >= tracks.children.length) {
      indexs = 0;
    }
    tracks.style.transform = `translateX(-${slideWidths * indexs}px)`;
  }, 3000);
  