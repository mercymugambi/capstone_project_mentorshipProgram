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

const featuredSpeakers = document.getElementById("featuredSpeakers");

const allSpeakers = [
  {
    image: './assets/images/speaker_01 2.png',
    speakerName: 'Kim Doctor',
    profession: 'Berkman Professor Shadowed physicians in multiple departments',
    carreer: 'Current Physician Assistant (PA) student',
  },

  {
    image: './assets/images/speaker_01 2.png',
    speakerName: 'osugo Benkler',
    profession: 'Professor of Entrepreneurial Business Studies at Harvard Law School',
    carreer: 'Jomo kenyatta University',
  },

  {
    image: './assets/images/speaker_01 2.png',
    speakerName: 'Joes Njoroge',
    profession: 'Software Engineer at microsoft Studies at Harvard Law pauls college',
    carreer: 'Jes studies commons-based communications book'
  },

  {
    image: './assets/images/speaker_01 2.png',
    speakerName: 'Kimbarly Beverly',
    profession: 'Lecture of Entrepreneurial Business Studies at Harvard Law Sch School',
    carreer: 'commons-based peer production, and published his seminal book',
  },

  {
    image: './assets/images/speaker_01 2.png',
    speakerName: 'Grace Benkler',
    profession: 'Grace Professor of Entrepreneurial Legal Studies at Harvard Law School',
    carreer: 'Grace studies commons-based peer production, and published his seminal book',
  },

  {
    image: './assets/images/speaker_01 2.png',
    speakerName: 'Truphena Benkler',
    profession: 'Lecture of Entrepreneurial Business Studies at Harvard Law Sch School',
    carreer: 'Truh studies commons-based computer science and programmings',
  },
];

const readMore = document.querySelector(".readMore");

window.addEventListener('load', (() => {
  function addfeatured(){
  let addfeatureSpeakers = '';
  allSpeakers.forEach((speaker, index) =>{
    if ((window.screen.availWidth >= 768) ){
      addfeatureSpeakers += `<div class="speakers-card">
      <img src="${speaker.image}" alt="image1"/>
      <div class="speakers-intro">
          <h2 class="speakers-name">${speaker.speakerName}</h2>
          <p class="speakers-proffession">${speaker.profession}</p>
          <p class="speakers-career">${speaker.carreer}</p>
      </div>
  </div>`;
    }else if (index <2) {
      
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

  readMore.addEventListener('click', () => {
    featuredSpeakers.innerHTML = '';
    allSpeakers.forEach((speaker) =>{
        featuredSpeakers.innerHTML += `<div class="speakers-card">
        <img src="${speaker.image}" alt="image1"/>
        <div class="speakers-intro">
            <h2 class="speakers-name">${speaker.speakerName}</h2>
            <p class="speakers-proffession">${speaker.profession}</p>
            <p class="speakers-career">${speaker.carreer}</p>
        </div>
    </div>`;
  })});

  addfeatured();
  window.onresize = addfeatured;

}));

