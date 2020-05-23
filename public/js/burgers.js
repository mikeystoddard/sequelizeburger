$(document).ready(function() {
  console.log("hello world")
    $("#btn-devour").on("click", function (event) {
        event.preventDefault();
        console.log("update button click")
        var burger_id = $(this).siblings(".burger_id").val();
        console.log(burger_id);

    
      $.ajax("/api/burgers/" + burger_id, {
        type: "PUT",
        data: {devoured: true}
      }).then(
        function() {
          console.log("changed", devouredState);
        
          location.reload();
        }
      );
    });

  
  $("#addburger").on("submit", function (event) {
    event.preventDefault();
  
    console.log("adding", $("#newburger").val().trim())

  
      var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: false
      };
  
    console.log("Neww Burger Data", newBurger)                             
      $.ajax("/api/burgers", {                                  
        type: "POST",
        data: {data : newBurger}
      }).then(
        function() {
          console.log("new");
           location.reload();
        }
      );
    });
  })