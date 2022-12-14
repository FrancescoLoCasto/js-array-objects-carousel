const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

const imagesCarousel = document.getElementById("imgCarousel")

let indexImg = 1
imagesCarousel.src = `./img/0${indexImg}.webp`
const preButton = document.getElementById('buttonPrevious')
const nextButton = document.getElementById('buttonNext')


// eventlist section
   
   preButton.addEventListener("click", function () {

      if (indexImg === 1) {
         indexImg = 5;
     } else {
      indexImg--;
     }
     imagesCarousel.src = `./img/0${indexImg}.webp`

   })


   nextButton.addEventListener("click", function () {

      if (indexImg >= 5) {
         indexImg = 1;
     } else {
      indexImg++;
     }
     imagesCarousel.src = `./img/0${indexImg}.webp`

   })