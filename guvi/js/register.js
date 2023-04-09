$(document).ready(function () {

    // FirstName validation
    $('#firstName').on('keyup', function () {
        var fname = $(this).val();
        var regex = /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z])$/;
        var feedback = $(this).siblings('.invalid-feedback');

        if (!regex.test(fname) || fname.length < 5) {
            $(this).addClass('is-invalid');
            feedback.show();
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
            feedback.hide();
        }
    });


    // LastName validation
    $('#lastName').on('keyup', function () {
        var lname = $(this).val();
        var feedback = $(this).siblings('.invalid-feedback');

        if (!isNaN(lname)) {
            $(this).addClass('is-invalid');
            feedback.show();
        } else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            feedback.hide();
        }
    });

    // Validate email input on type
    $('#email').on('keyup', function () {
        var email = $(this).val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var feedback = $(this).siblings('.invalid-feedback');
        if (!emailRegex.test(email)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            feedback.show();
        } else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            feedback.hide();
        }
    });

    // Validate password input on type
  $('#password').on('keyup', function () {
    var password = $(this).val();
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var feedback = $(this).siblings('.invalid-feedback');
    if (!passwordRegex.test(password)) {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
        feedback.show();
    } else {
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');
        feedback.hide();
    }
});


  // Validate confirm password input on type
  $('#cpassword').on('input', function () {
      var feedback = $(this).siblings('.invalid-feedback');
      var password = $('#password').val();
      var confirmPassword = $(this).val();
      if (confirmPassword !== password) {
          $(this).removeClass('is-valid');
          $(this).addClass('is-invalid');
          feedback.show();
      } else {
          $(this).removeClass('is-invalid');
          $(this).addClass('is-valid');
          feedback.hide();
      }
  });



    $('#phone').on('keyup', function () {
        var feedback = $(this).siblings('.invalid-feedback');
        var Phone = $(this).val();
        var mobileRegex = /^(\+91|0)?[6789]\d{9}$/;
        if (!mobileRegex.test(Phone)) {
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            feedback.show();
        } else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');
            feedback.hide();
        }
    });

    // $('#Address').on('keyup', function () {
    //     var feedback = $(this).siblings('.invalid-feedback');
    //     var address = $(this).val();
    //     if (address.length === 0) {
    //         $(this).removeClass('is-valid');
    //         $(this).addClass('is-invalid');
    //         feedback.show();
    //     } else {
    //         $(this).removeClass('is-invalid');
    //         $(this).addClass('is-valid');
    //         feedback.hide();
    //     }
    // });

    // $('#Address').on('focus', function () {
    //     var feedback = $(this).siblings('.invalid-feedback');
    //     var address = $(this).val();
    //     if (address.length === 0) {
    //         $(this).removeClass('is-valid');
    //         $(this).addClass('is-invalid');
    //         feedback.show();
    //     } else {
    //         $(this).removeClass('is-invalid');
    //         $(this).addClass('is-valid');
    //         feedback.hide();
    //     }
    // });


    $('#submit').click(function (e) {
        if ($('.is-invalid').length > 0 || ($('#firstName').val().length === 0 || $('#lastName').val().length === 0 || $('#emailAddress').val().length === 0 || $('#password').val().length === 0 || $('#phoneNumber').val().length === 0)) {
            alert("Fill The Details.")
            e.preventDefault();
        }
        else {
            let fname = $('#firstName').val()
            let lname = $('#lastName').val();
            let email = $('#email').val();
            let password = $('#password').val()
            let phone = $('#phone').val();
            //call ajax hear
            $.ajax({
                type: "POST",
                url: "php/register_2.php",
                data: { fname: fname, lname: lname, email: email, password: password, phone: phone },
                success: function(data) {
                  console.log(data);
                  window.location.href = './login.html';
                }
              });
            // $.ajax({
            //     type: "POST",
            //     url: "php/register_2.php",
            //     data: { fname: fname, lname: lname, email: email, password: password, phone: phone },
            //     success: function (msg) {
            //         window.location.href = './login.html';
            //     }
            // });

        }
    })

});