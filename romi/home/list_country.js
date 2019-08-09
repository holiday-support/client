$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      }); 
    });

    $.ajax({
        url : "http://localhost:3000/api/calendars/"
    })
    .done(function(data){
    
        data.forEach(e => {
            $('#myList').prepend(
                `<li class="list-group-item" ><a href ="#">${e.value}</a></li>`
            )
        });
    })
    .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });
  });