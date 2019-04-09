(function() {
 
    // Remove-funktion för li-items i varukorgen
    $('.close').click(function(){
      $(this).parents('li').remove();
      
    })
  })();