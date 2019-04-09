$(function(){

    let totalSum = 0;

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
    
      let getKey = JSON.parse(window.localStorage.getItem(key));
      let sum = getKey["1"] * getKey["2"];
      totalSum += sum;
      
      if(key > 0){
        $("#cart").append(
        `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0" id="product-name">${getKey["0"]}</h6>
              <h6 class="my-0" id="product-price">${getKey["1"]} :- styck</h6><br>
              <input type="number" min="0" name="" class="quantity" value = ${getKey["2"]}>
              <a class="close fa fa-trash" href="#" id="trashcan"></a>
            </div>
            <span class="text-muted">${sum} :-</span>
          </li>
        `)
      
      }
      $("#product-amount").change(function(){
      let quantity =  $("#product-amount").val();
      let lsUpdate = [getKey["0"], getKey["1"], quantity];
      localStorage.setItem(getKey, JSON.stringify(lsUpdate));
      })
    }
    
    $("#cart").append(
    `<li class="list-group-item d-flex justify-content-between">
          <span>Total summa kr. </span>
          <strong>${totalSum} :-</strong>
      </li>`)
    
  })