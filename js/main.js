// https://codeseven.github.io/toastr/demo.html
// https://github.com/CodeSeven/toastr


$('#resend').on('click', function() {
    var randomNumber = Math.floor(Math.random() * 9999) + 1000;

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["success"]("Don’t share @tinder.com ", "Your Tinder code is " + randomNumber)

});

$('#call').on('click', function() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["warning"]("Don’t share @tinder.com ", "Tinder is calling +35383*******476")

});
$('#verify').on('click', function() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["info"]("Don’t share @tinder.com ", "Login Successful")

});
$('#unsuccessful').on('click', function() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["error"](" ", "Login Unsuccessful")

});

function validation() {
    var randomNumber = Math.floor(Math.random() * 9999) + 1000;

    var OTP1 = (document.getElementById('OTP1').value);
    var OTP2 = (document.getElementById('OTP2').value);
    var OTP3 = (document.getElementById('OTP3').value);
    var OTP4 = (document.getElementById('OTP4').value);
    console.log(OTP1, OTP2, OTP3, OTP4);

}