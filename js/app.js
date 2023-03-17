const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.a-links').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

//objects 
const featuredSpeakers = document.getElementById("featuredSpeakers");
const moreSpeakers = document.getElementById("moreSpeakers");

const allSpeakers = [
  {
    image: './assets/images/speaker_01 1.png',
    speakerName: 'Yochai Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    carreer: 'Benkler studies commons-based peer production',
  },

  {
    image: './assets/images/speaker_01 1.png',
    speakerName: 'osugo Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    carreer: 'Benkler studies commons-based peer production',
  },

  {
    image: './assets/images/speaker_01 1.png',
    speakerName: 'Joes Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    carreer: 'Benkler studies commons-based peer production, and published his seminal book'
  },

  {
    image: './assets/images/speaker_01 1.png',
    speakerName: 'Kimbarly Benkler',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    carreer: 'Benkler studies commons-based peer production, and published his seminal book',
  },

  {
    image: "./assets/images/speaker_01 1.png",
    speakerName: "Grace Benkler",
    profession: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    carreer: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
  },

  {
    image: "./assets/images/speaker_01 1.png",
    speakerName: "Truphena Benkler",
    profession: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
    carreer: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
  },
];

window.addEventListener('load', (() => {
  function addfeatured(){
  let addfeatureSpeakers = '';
  allSpeakers.forEach((speaker, index) =>{
    if ((window.screen.availWidth < 768) && index <=1){
      addfeatureSpeakers += `<div class="speakers-card">
      <img src="${speaker.image}" alt="image1"/>
      <div class="speakers-intro">
          <h2 class="speakers-name">${speaker.speakerName}</h2>
          <p class="speakers-proffession">${speaker.profession}</p>
          <p class="speakers-career">${speaker.carreer}</p>
      </div>
  </div>`;
    }else if ((window.screen.availWidth >= 768)) {
      
      addfeatureSpeakers += `<div class="speakers-card">
      <img src="${speaker.image}" alt="image1"/>
      <div class="speakers-intro">
          <h2 class="speakers-name">${speaker.speakerName}</h2>
          <p class="speakers-proffession">${speaker.profession}</p>
          <p class="speakers-career">${speaker.carreer}</p>
      </div>
  </div>`;
    }
  })
  featuredSpeakers.innerHTML = addfeatureSpeakers;
  }
  addfeatured();

  window.onresize = addfeatured;
  
}));

