$(function () {

  let totalSum = 0;

  for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    let getKey = JSON.parse(window.localStorage.getItem(key));
    let sum = getKey["1"] * getKey["2"];
    totalSum += sum;

    if (key > 0) {
      $("#cart").append(
        `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0" id="product-name">${getKey["0"]}</h6>
              <h6 class="my-0" id="product-price">${getKey["1"]}</h6><br>
              <input type="number" min="0" name="" class="quantity" data="${getKey["3"]}" value = ${getKey["2"]}>
              <a class="close fa fa-trash" href="#" id="trashcan" data="${getKey["3"]}"></a>
              <div class="img" style="display:none" data="${getKey["4"]}"></div>
            </div>
            <span class="text-muted">${sum} :-</span>
          </li>
        `)

    }

  }

  $("#cart").append(
    `<li class="list-group-item d-flex justify-content-between">
    <span>Total summa kr. </span>
    <strong>${totalSum} :-</strong>
    </li>`)


  // Remove-funktion för li-items i varukorgen
  $('.close').on("click", function () {
    $(this).parents('li').remove();
    let getKey3 = $(this).attr("data");
    localStorage.removeItem(getKey3);
  });



//Sparar nytt antal i localStorage
  $('.quantity').on("change", function () {
    let getKey3 = $(this).attr("data");
    let title = $(this).siblings("#product-name").text();
    let price = Number($(this).siblings("#product-price").text());
    let amount = $(this).val();
    let img = $(this).siblings(".img").attr("data");
    let lSUpdate = [title, price, amount, getKey3, img];

    localStorage.setItem(getKey3, JSON.stringify(lSUpdate));
  
  });




  // Clear-funktion för varukorg och localstorage
  $("#clear-cart").click(function () {
    $("#cart").children('li').remove();
    localStorage.clear();
  })

});//ready