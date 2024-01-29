
const scrollButtons = document.getElementsByClassName('nav_link');
for (let i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener('click', scrollToBlock);
  }

  function scrollToBlock() {
    event.preventDefault();
    const targetBlockId = this.dataset.target;
    const targetBlock = document.getElementById(targetBlockId);
    targetBlock.scrollIntoView({ behavior: 'smooth' });
  }

  
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("nav-toggle");
    var info = document.getElementById("nav");

    button.addEventListener("click", function(event) {
        if(info.classList.contains('active')){
          info.classList.remove("active");
        }else{
          info.classList.add("active");
        }
    });
  });

  


function setupHeaderScroll() {
  var header = document.getElementById('header');
  var servicesH = document.getElementById('services').offsetHeight;
  var scrolloffset = document.documentElement.scrollTop;
  checkScroll(scrolloffset);
  
  window.addEventListener('scroll', function() {
    scrolloffset = document.documentElement.scrollTop;
    checkScroll(scrolloffset);
  });

  function checkScroll(scrolloffset) {
    if (scrolloffset >= servicesH) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }
}

setupHeaderScroll();


var namesData = [
  "John Doe, Google Inc.",
  "Gorbunov, Facebook Inc.",
  "UKNBNBKJN, Facebook Inc."
];

function showContent(index) {
  // Скрыть все элементы
  var items = document.querySelectorAll('.clients_item');
  items.forEach(function(item) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });

  // Показать выбранный элемент
  items[index].classList.add('active');

  // Подсветить активный круг
  var circles = document.querySelectorAll('.cirk_cirk');
  circles.forEach(function(circle) {
    if (circle.classList.contains('cirk_activ')) {
      circle.classList.remove('cirk_activ');
    }
  });
  circles[index].classList.add('cirk_activ');

  // Обновить содержимое clients_name
  var names = document.querySelectorAll('.clients_name');
  var newName = namesData[index];
  names.forEach(function(name) {
    name.textContent = newName;
  });
}

