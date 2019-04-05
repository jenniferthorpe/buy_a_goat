$(function () {
  $.getJSON("products.json", function (response) {
    let quantity;
    $.each(response, function (i, goat) {
      $("#" + goat.id + " img").attr("src", goat.image);
      $("#" + goat.id + " h1").text(goat.title)
      $("#" + goat.id + " .description").text(goat.description)
      $("#" + goat.id + " .price").text(goat.price + "kr")
      $("#" + goat.id + " .quantity").change(function(){
        quantity =  $("#" + goat.id + " .quantity").val()
    });
    
    //sparar info om val get i localStorage
      $("#" + goat.id + " .addToCart").click(function () {
        let cart = [goat.id, goat.price, quantity]
        localStorage.setItem(goat.id, JSON.stringify(cart));
      });

    })

  })

});
