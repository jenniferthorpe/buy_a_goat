$(function () {
  //Hämtar alla produkter från JSON-filen och visar dessa på sidan genom att använda varje produkts ID.
  $.getJSON("products.json", function (response) {
    let quantity;
    $.each(response, function (i, goat) {
      $("#" + goat.id + " img").attr("src", goat.image);
      $("#" + goat.id + " h1").text(goat.title)
      $("#" + goat.id + " .description").text(goat.description)
      $("#" + goat.id + " .price").text(goat.price + "kr")
      $("#" + goat.id + " .quantity").change(function () {
        quantity = $("#" + goat.id + " .quantity").val()
      });

      //sparar info om vald produkter i localStorage
      $("#" + goat.id + " .addToCart").click(function () {
        let cart = [goat.title, goat.price, quantity, goat.id, goat.image]
        localStorage.setItem(goat.id, JSON.stringify(cart));
        
      });
      
    }) //each
    
        //Visar en förhandsgranskning av kassan i övre högra hörnet. 
        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          let a = JSON.parse(window.localStorage.getItem(key));
        
        if (key > 0) {
          $("#cart").append(
            `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <h6 class="my-0" id="product-name">${a["0"]}, ${a["1"]} :- styck</h6>
            <h6 class="my-0" id="product-price">Antal: ${a["2"]}</h6>
            </div>
            </li>
            
            `)
          
        }
      }
    
  }) //JSON
}); //ready
