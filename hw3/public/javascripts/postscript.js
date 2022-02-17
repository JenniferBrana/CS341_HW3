//@author: Jennifer Brana
//javascript for sending a post to the server

//$.post(url, data, callback_function, data_type)
//url: used to send the request.
//data: represents the data that will be sent to the server
//callback_function: represents a function to be executed when the data is loaded successfully.
//data_type: type of data to be returned to callback function


function monthSelect(){
    var value = $('#month').val().toUpperCase();
    $.post('/orders', //url
    {month: value}, //data: pass month to the database thingy idk im not a software enigneer
    function(arrayOrders, status, json){ //callback function

        $("#cherryOrders").text(arrayOrders.data[0].cherry.quantity +  " cherry");
        $("#chocolateOrders").text(arrayOrders.data[1].chocolate.quantity +  " chocolate");
        $("#plainOrders").text(arrayOrders.data[2].plain.quantity +  " plain");

    });

}





///
