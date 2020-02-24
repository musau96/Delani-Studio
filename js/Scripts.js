$(".click").click(function () {
    $(".design-hide").slideToggle();
    $(".design-show").slideToggle();
});

$(".click2").click(function () {
    $(".development-hidd").slideToggle();
    $(".development-show").slideToggle();
});

$(".click3").click(function () {
    $(".management-hide").slideToggle();
    $(".management-show").slideToggle();
});

var key = '1c2089a31a00d28af6cb0e553ed84697-us20';

$("button").click(function (event) {
    event.preventDefault();
    var user = document.getElementById('username').value;
    alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
});

$("button").on('click', function () {
    $('form').each(function () {
        this.reset();
    });
});