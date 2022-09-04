window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


const heroElem = document.querySelector('#hero');
const lionElem = document.querySelector('#black');
const elephantElem = document.querySelector('#colored');

const scrollAmount = -500;
window.addEventListener('scroll', (event) => {
  const { top } = heroElem.getBoundingClientRect();
  const heroInView = top - window.innerHeight < scrollAmount;
  lionElem.style.opacity = +!heroInView;
  elephantElem.style.opacity = +heroInView;
});

var words = ['I am a second year CS student at VIT Chennai.', 'I completed my HSSC from Thrissur and SSC from Kannur.', 'Languages Known: HTML, CSS, C, C++, PYTHON, JAVASCRIPT', ''],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 80;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
