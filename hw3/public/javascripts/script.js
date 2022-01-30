
//script to determine the order, clear the order page from the screen, and display the order.


//Source: HW 3 document
eventHandler = function( event ) {
  requestVegan();
 }
 $(function() {
 $('#notessss').on('input', eventHandler);
 });

const order = {quantity:3, topping:""};
const entered = {text:"100", vegan:""};

  function placeOrder()
  {
    if(entered.vegan == "true")
    {
      alert("There are no vegan options. Cheesecake contains dairy. Retry.");
    }
    else
    {
      //source: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
      document.getElementById('form').style.display ='none';
      document.getElementById("text1").innerHTML = "Thank you! Your order has been placed.";
  	  document.getElementById("text2").innerHTML = "Quantity: " + order.quantity;
      document.getElementById("text3").innerHTML = "Topping: " + order.topping
      document.getElementById("text4").innerHTML = "Special Requests: " + $('textarea#notessss').val();
    }
  }

  //check if they requested vegan in their comments
  function requestVegan(){
      var text =  $('textarea#notessss').val();
      if((text.toLowerCase()).includes("vegan"))
      {
      entered.vegan="true";
      }
      else
      {
      entered.vegan="false";
      }
  }
