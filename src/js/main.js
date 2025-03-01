import $ from 'jquery';

$(document).ready(function () {
    $('#header').css({'visibility': 'visible', transform: "translateY(0)"});
});

$('.bi-facebook').on('click', function () {
    window.open('https://web.facebook.com/vimukthi.jayasanka.16/','_blank');
});

$('.bi-linkedin').on('click', function () {
    window.open('https://www.linkedin.com/in/vimukthijayasanka/','_blank');
});

$('.bi-whatsapp').on('click', function () {
    const phoneNumber = '+94763651572';
    const message = encodeURIComponent("Hello! I'm interested in your services."); // Pre-filled message
    const whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(whatsappURL, '_blank');
});

$('.bi-envelope').on('click', function () {
    const recipient = "jayasanka1997@email.com";
    const subject = encodeURIComponent("Interested in your services");
    const body = encodeURIComponent("Hello,\n\nI would like to know more about your services.");

    const gmailURL = "https://mail.google.com/mail/?view=cm&fs=1&to=" + recipient + "&su=" + subject + "&body=" + body;

    window.open(gmailURL, '_blank');
});