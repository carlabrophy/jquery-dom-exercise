//1
$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!")
});

//2
$('article img').addClass('image-center');
//3
$('article p').eq(5).remove();
//4
$('#title').css('font-size', Math.floor(Math.random() * 100))
//5
$('<li>You can say whatever you want.</li>').appendTo('ol')
//6
$('aside').children().remove()
$("<p>Apologies for the list's existence</p>").appendTo('aside')

//7
$(".form-control").on('keyup blur change', function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css("background-color",
    "rgb(" + red + "," + green + "," + blue + ")");
});

//8
$("img").on("click", function (e) {
	$(e.target).remove();
});

