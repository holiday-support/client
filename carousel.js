$(document).ready(function(){
    $.ajax({
        url : 'http://localhost:3000/api/search/photos',
        method : 'GET'
    })
    .done(function(image){
        console.log(image);
        let count = 0;
        image.forEach(e => {
            if(count === 0){
                $('#carousel-32').prepend(
                    `<div class="item active">
                    <img src="${e.urls.raw}" alt="Los Angeles">
                  </div>`
                )    
            }else {
                $('#carousel-32').prepend(
                    `<div class="item">
                        <img src="${e.urls.raw}" alt="New York">
                    </div>`
                )
            }
            count++
        });
    })
    .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });
})