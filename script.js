const body = document.querySelector('body'),
  sidebar = body.querySelector('.sidebar'),
  toggle = body.querySelector('.toggle'),
  searchBtn = body.querySelector('.search-box'),
  modeSwitch = body.querySelector('.toggle-switch'),
  modeText = body.querySelector('.mode-text'),
  mSwitch = body.querySelector('.toggle-switch1'),
mText = body.querySelector('.mode-text');


toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});


searchBtn.addEventListener('click', () => {
  sidebar.classList.remove('close');
});


if (localStorage.getItem('nightMode') === 'true') {
  body.classList.add('dark');
}

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    modeText.innerText = 'Light Mode';
  } else {
    modeText.innerText = 'Dark Mode';
  };
  
  // Save user's preference in local storage
  localStorage.setItem('nightMode', body.classList.contains('dark'));
});



// ===json fetch===
let song = document.getElementsByClassName('songCards')[0];

let json_url = "songs.json";

fetch(json_url).then(Response => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { songName, image, songLink, artist } = ele;
      let songcard = document.createElement('div');
      songcard.classList.add('songCard');
      songcard.href = songLink;
      songcard.innerHTML = `
      <div class="box">
      <span></span>
      <div class="songcard">
          <div class="image">
              <img src="${image}" alt="" class="poster">
          </div>
          <div class="songcontent">
              <div class="songtitle">
                  <h3>${songName}</h3>
                  <h5>${artist}</h5>
              </div>
              <div class="play">
                  <button type="button"><a href="${songLink}">
                      <i class="ri-play-fill"></i></a>
                  </button>
              </div>
          </div>
      </div>
  </div>
    `
      song.appendChild(songcard);
    });
});

let suggust = document.getElementsByClassName('suggust')[0];

  fetch(json_url).then(Response => Response.json())
  .then((data) => {
    data.forEach((element, i) => {
      let { songName, image, songLink, artist, type, year, time, language } = element;
      let suggustcard = document.createElement('div');
      suggustcard.classList.add('suggust-card');
      suggustcard.innerHTML = `
      <a href="${songLink}">
          <img src="${image}" alt="">
          <div class="sug-cont">
              <h3>${songName}</h3>
              <h4>${artist}</h4>
              <ul>
                  <li>${type}</li>
                  <li>${year}</li>
                  <li>${time}</li>
                  <li>${language}</li>
              </ul>
          </div>
          <div class="sug-play">
              <i class="ri-play-fill"></i>
          </div>
      </a>
`

suggust.appendChild(suggustcard);

  });
});

// ==== serach result ===
let search = document.getElementsByClassName('m-result')[0];
let SearchInput = document.getElementById('search-input');

  fetch(json_url).then(Response => Response.json())
  .then((data) => {
    data.forEach((x, i) => {
      let { songName, image, songLink, artist } = x;
      let SearchCard = document.createElement('a');
      SearchCard.classList.add('m-search-card');
      SearchCard.href = songLink;
      SearchCard.innerHTML = `
      <img src="${image}" alt="">
      <div class="song-info">
          <h4 class="song-name">${songName}</h4>
          <p class="artist-name">${artist}</p>
      </div>
`

search.appendChild(SearchCard);

  });

  SearchInput.addEventListener('keyup', () => {
    let filter = SearchInput.value.toUpperCase();
    let a = search.getElementsByTagName('m-search-card');
  
    for (let index = 0; index < a.length; index++) {
      let b = a[index].getElementsByClassName('song-info')[0];
      let Textvalue = b.textContent || b.innerText;
      if (Textvalue.toUpperCase().indexof(filter) > -1) {
        a[index].style.display = 'flex';
        search.style.visibility = 'visible';
        search.style.opacity = 1;
      } else {
        a[index].style.display = 'none';
      } if (SearchInput.value == 0) {
        search.style.visibility = 'hidden';
        search.style.opacity = 0;
      }
    }
  });
});





// ?=== mobile night mode 
if (localStorage.getItem('nightMode') === 'true') {
  body.classList.add('dark');
}

mSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    mText.innerText = 'Light Mode';
  } else {
    mText.innerText = 'Dark Mode';
  };
  
  // Save user's preference in local storage
  localStorage.setItem('nightMode', body.classList.contains('dark'));
});


  // === home buttons ====
  function spotify() {
    window.open('https://www.youtube.com/@btcnairobi', '_blank'); // open the twitter page on a new window 
  }  
  function youtube() {
    window.open('https://www.youtube.com/@btcnairobi', '_blank'); // open the twitter page on a new window 
  };

// like button

const likebtn = document.querySelector('.btn2');

if (localStorage.getItem('like') === 'true') {
  likebtn.classList.add('on');
}

likebtn.addEventListener('click', () => {
  likebtn.classList.toggle('on');
  
  
  // Save user's preference in local storage
  localStorage.setItem('like', likebtn.classList.contains('on'));
});