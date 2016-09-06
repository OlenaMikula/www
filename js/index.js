$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm (e) {
    e.preventDefault();
    $.ajax({
        url: "http://formspree.io/hellenmiky35@gmail.com",
        method: "Post",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#msg').val()
        }
    });
}