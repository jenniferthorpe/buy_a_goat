(function() {

    // Validering för alla required-fält (Validerar att det är fler än 2 tecken och att de inte består enbart av siffror)
    $("input[required]").keyup(function() {
        if ($(this).val().length <= 2 || $.isNumeric($(this).val())){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });

    //Validering för e-mail (validerar att @ finns med i inputen)
    $("#email").keyup(function(){
        if ($(this).val().indexOf("@") > -1){
            $(this).siblings(".invalid-feedback").hide();
        }
        else{
            $(this).siblings(".invalid-feedback").show();
        }
    })
    
  })();