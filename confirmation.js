$(function(){
    let totalSum = 0; 
    
    for (let i = 0; i < localStorage.length; i++) {
     let key = localStorage.key(i); //Key typ som objekt - med metoder och egenskaper
    
     let getKey = JSON.parse(window.localStorage.getItem(key)); 
     
     let sum = getKey["1"] * getKey["2"];
     totalSum += sum;
     
     if(key > 0){
      $("#cart").append(
      `
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
         <img src="${getKey["4"]}">
         <h4 class="my-0" id="product-name">${getKey["0"]}</h4>
         <h6 class="my-0" id="product-price"> ${getKey["1"]} :- styck</h6>
         <h6 class="my-0" id="product-price">Antal: ${getKey["2"]}</h6>
        </div>
       </li>
      `)
     
     }}
    
    $("#cart").append(
    `<li class="list-group-item d-flex justify-content-between">
       <h4>Total summa kr. </h>
       <strong>${totalSum} :-</strong>
     </li>`)
    
   })