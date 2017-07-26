//$(function () {
//  $('select').on('change', function () {
//    $('.jqOption').slideUp();
//    $('.' + $(this).val()).slideDown();
//  })
//})


var options = document.querySelectorAll('.jqOption');

function close() {
  for (var i = 0; i < options.length; i++) {
    options[i].classList.remove('show')
  }
}

function show(el) {
  var a = document.getElementsByClassName(el);
  for (var i = 0; i < a.length; i++) {
    a[i].classList.add('show');
  }
}

var select = document.querySelector('select');


function start() {
  var current = select.value;
  close();
  show(current);
}

select.addEventListener('change', start);