$('button').on('click', function (e) {
  // e.preventDefault();
  let movie = $('input').eq(0).val() + " " + $("input").eq(1).val() + " ";
  $("input").val("");
  $("<li></li>")
    .text(movie)
    .append('<button id="li-btn">remove</button>').appendTo('ul');
});

$('section').on('click','li', function () {
  $(this).remove()
})

