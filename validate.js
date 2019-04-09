(function() {

    // Validering för alla fält med class validation1 (Validerar att det är fler än 2 tecken och att de inte består enbart av siffror)
    $(".validation1").keyup(function() {
        if ($(this).val().length <= 2 || $.isNumeric($(this).val())){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });

    // Validering för e-mail (validerar att @ finns med i inputen)
    $("#email").keyup(function(){
        if ($(this).val().indexOf("@") > -1){
            $(this).siblings(".invalid-feedback").hide();
        }
        else{
            $(this).siblings(".invalid-feedback").show();
        }
    })

    // Validerar att postkoden enbart innehåller siffror samt innehåller exakt 5 tecken
    $("#zip").keyup(function() {
        if (isNaN($(this).val()) || $(this).val().length < 5 || $(this).val().length > 5){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });
  })();