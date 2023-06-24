let left_container = document.querySelector('.left-container');
let right_container = document.querySelector('.right-container');
let left_bar_btn = document.querySelector('.logo i');
let header_shadow = document.querySelector('.header-shadow');
let header = document.querySelector('.right-container header');
let header_ul = document.querySelectorAll('.right-container header ul');
let header_ul_li = document.querySelectorAll('.right-container header .logo-ul li');
let header_words = document.querySelectorAll('.right-container header .header');
let window_scroll_position = 0;
let loop_play_window = document.getElementById('loop-window');

var pageChange = false;

left_bar_btn.addEventListener('click', () => {
  if(!left_container.classList.contains('unfold')){
    left_container.classList.add('unfold');
    if(left_container.classList.contains('fold')) {
      left_container.classList.remove('fold');
    }
  }
  else {
    left_container.classList.remove('unfold');
    left_container.classList.add('fold');
  }
})

const bottom_scroll_element = document.querySelectorAll('.scroll-bottom');
const bottom_scroll_element_f = document.querySelectorAll('.scroll-bottom-fast');
const bottom_scroll_element_l = document.querySelectorAll('.scroll-bottom-low');
const left_scroll_element = document.querySelectorAll('.scroll-left');
const right_scroll_element = document.querySelectorAll('.scroll-right');
bottom_scroll_element.forEach((e) => {
  e.style.opacity = 0;
})
left_scroll_element.forEach((e) => {
  e.style.opacity = 0;
})
right_scroll_element.forEach((e) => {
  e.style.opacity = 0;
})

const elementInView = (e, percentScrollOffset = 100) => {
  const elementTop = e.getBoundingClientRect().top
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) * (percentScrollOffset / 100)
  )
}

const displayScrollElemnt = (element, direction) => {
  if(direction == 'bottom'){
    element.classList.add('bottom-scrolled');
  }
  else if(direction == 'left') {
    element.classList.add('left-scrolled');
  }
  else if(direction == 'right') {
    element.classList.add('right-scrolled');
  }
}
const hideScrollElement = (element, direction) => {
  if(direction == 'bottom'){
    element.classList.remove('bottom-scrolled');
  }
  else if(direction == 'left') {
    element.classList.remove('left-scrolled');
  }
  else if(direction == 'right') {
    element.classList.remove('right-scrolled');
  }
}

const handleScrollAnimation = () => {
  bottom_scroll_element_f.forEach((e) => {
    if(elementInView(e, 100)) {
      displayScrollElemnt(e, 'bottom');
    }
    else {
      hideScrollElement(e, 'bottom');
    }
  })
  bottom_scroll_element_l.forEach((e) => {
    if(elementInView(e, 100)) {
      displayScrollElemnt(e, 'bottom');
    }
    else {
      hideScrollElement(e, 'bottom');
    }
  })
  bottom_scroll_element.forEach((e) => {
    if(elementInView(e, 100)) {
      displayScrollElemnt(e, 'bottom');
    }
    else {
      hideScrollElement(e, 'bottom');
    }
  })
  left_scroll_element.forEach((e) => {
    if(elementInView(e, 100)) {
      displayScrollElemnt(e, 'left');
    }
    else {
      hideScrollElement(e, 'left');
    }
  })
  right_scroll_element.forEach((e) => {
    if(elementInView(e, 100)) {
      displayScrollElemnt(e, 'right');
    }
    else {
      hideScrollElement(e, 'right');
    }
  })
}

window.addEventListener('scroll', (e) => {
  window_scroll_position = window.scrollY;
  handleScrollAnimation();
  // console.log(window_scroll_position);
  if(!pageChange){
    if(window_scroll_position > 705 && window_scroll_position < 730) {
      window.scrollTo({
        // top: document.querySelector('#loop-window').offsetBottom,
        top:720,
        behavior: "instant"
      });
    }

    if(window_scroll_position > 1) {
      header_words.forEach((item) => {
        item.classList.remove('ontop');
        item.classList.add('untop');
      });
      header.classList.remove('ontop');
      header.classList.add('untop');
      if(left_container.classList.contains('unfold')){
        left_container.classList.remove('unfold');
        left_container.classList.add('fold');
      }
    }
    else {
      header_words.forEach((item) => {
        item.classList.remove('untop');
        item.classList.add('ontop');
      });
      header.classList.remove('untop');
      header.classList.add('ontop');
    }
    if(window_scroll_position == document.querySelector('.aboutus').offsetTop){
      header.style.position = 'relative'
    }else {
      header.style.position = 'sticky'
    }
  }
  else {
    if(window_scroll_position > 1) {
      header_words.forEach((item) => {
        item.classList.remove('ontop');
        item.classList.add('untop');
      });
      header.classList.remove('ontop');
      header.classList.add('untop');
      if(left_container.classList.contains('unfold')){
        left_container.classList.remove('unfold');
        left_container.classList.add('fold');
      }
      intr();
    }
    else {
      index();
    }
  }

})

let input = document.querySelectorAll('.slides input');
let slide_li = document.querySelectorAll('.slide');
function timer(){
  time = setInterval(() => {
    for(let i = 0; i < 3; i++){
      if(input[i].checked){
        input[(i+1)%3].checked=true
        slide_li[i].querySelector('.font-panel')
          .classList.remove('slided');
        slide_li[(i+1)%3].querySelector('.font-panel')
          .classList.add('slided');
        break;
      }
    }
  }, 8000)
}
timer();
let controls_visible_label = document.querySelectorAll('.loopplay ul .controls-visible label');
for(let i = 0; i < 3; i++){
  controls_visible_label[i].addEventListener('click', (e) => {
    slide_li[i].querySelector('.font-panel')
    .classList.add('slided');
    for(let j = 0; j < 3; j++) {
      if(i != j){
        slide_li[j].querySelector('.font-panel')
        .classList.remove('slided');
      }
    }
  })
}

let left_item = left_container.querySelector("li:nth-child(2)");
left_item.addEventListener('click', (e) => {
  window.location.href = "pages/login.html"
})

let body1 = document.getElementById('body1');
let body2 = document.getElementById('body2');
let introBtns = document.querySelectorAll('.right-container .menu li');
let introBtns_1 = document.querySelectorAll('.goto-describe');
let introBtn_2 = document.querySelector('.learn-more-word');
let introBtns_3 = document.querySelectorAll('.card button');
let leftBtn = document.querySelector('.logo i');
body2.classList.add('hide');
introBtns[0].addEventListener('click', (e) => {
  body1.classList.remove('hide');
  leftBtn.classList.remove('hide');
  body2.classList.add('hide');
  pageChange=false;
})
introBtns[1].addEventListener('click', (e) => {
  body1.classList.add('hide');
  leftBtn.classList.add('hide');
  body2.classList.remove('hide');
  pageChange=true;
})
introBtns_1.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    body1.classList.add('hide');
    leftBtn.classList.add('hide');
    body2.classList.remove('hide');
    pageChange=true;
  })
});
introBtn_2.addEventListener('click', (e) => {
  body1.classList.add('hide');
  body2.classList.remove('hide');
  leftBtn.classList.add('hide');
  pageChange=true;
});
introBtns_3.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    body1.classList.add('hide');
    body2.classList.remove('hide');
    leftBtn.classList.add('hide');
    pageChange=true;
  })
});
function index() {
  header_ul_li[0].style.top = '0';
  header_ul_li[1].style.top = '100%';
  header_ul[1].style.visibility = 'visible';
  header_ul[1].style.opacity = '1';
}
function intr() {
  header_ul_li[0].style.top = '-100%';
  header_ul_li[1].style.top = '0';
  header_ul[1].style.visibility = 'hidden';
  header_ul[1].style.opacity = '0';
}




