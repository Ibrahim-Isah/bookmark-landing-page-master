const simple = document.querySelector('.simple');
const speedy = document.querySelector('.speedy');
const easy = document.querySelector('.easy');
const details = document.querySelector('.slide-details');
const acc = document.getElementsByClassName('accordion');

function onSimple() {
  simple.setAttribute('id', 'active');
  speedy.removeAttribute('id');
  easy.removeAttribute('id');

  details.innerHTML = `
      <div class="detail-pic">
        <div class="rec"></div>
        <img src="./images/illustration-features-tab-1.svg" alt="">
      </div>
      <div class="detail-para">
        <h1>Bookmark in one click</h1>
        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
        <div>
          <button>More Info</button>
        </div>
      </div>
  `;

  details.setAttribute('id', 'details-style');
}
function onSpeedy() {
  speedy.setAttribute('id', 'active');
  easy.removeAttribute('id');
  simple.removeAttribute('id');

  details.innerHTML = `
      <div class="detail-pic">
        <div class="rec"></div>
        <img src="./images/illustration-features-tab-2.svg" alt="" id = "addmargin">
      </div>
      <div class="detail-para">
        <h1>Intelligent search</h1>
        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks</p>
        <div>
          <button>More Info</button>
        </div>
      </div>`;
}
function onEasy() {
  easy.setAttribute('id', 'active');
  speedy.removeAttribute('id');
  simple.removeAttribute('id');

  details.innerHTML = `
      <div class="detail-pic">
        <div class="rec"></div>
        <img src="./images/illustration-features-tab-3.svg" alt=""  id="addmargin">
      </div>
      <div class="detail-para">
        <h1>Share your bookmarks</h1>
        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button</p>
        <div>
          <button>More Info</button>
        </div>
        
      </div>`;
}

simple.addEventListener('click', onSimple);
speedy.addEventListener('click', onSpeedy);
easy.addEventListener('click', onEasy);

onSimple();

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
