(function() {

    $("input[required]").keyup(function() {
        if ($(this).val().length <= 2 || $.isNumeric($(this).val())){
            $(this).siblings(".invalid-feedback").show();
    }
        else{
            $(this).siblings(".invalid-feedback").hide();
    }
    });
    
  })();