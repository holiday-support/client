$(document).ready(function(){
    $.ajax({
        url : 'http://localhost:3000/api/search/photos',
        method : 'GET'
    })
    .done(function(image){
        console.log(image);
        image.forEach(e => {
            if( e.description){
              $('#list-image').prepend(
                `<div class="card p-2" style="width: 18rem;">
                <img class="card-img-top" src="${e.urls.full}" alt="Card image cap" style="max-height: 180px;">
                <div class="card-body">
                  <h5 class="card-title">${e.alt_description}</h5>
                  <p class="card-text">${e.description}</p>
                </div>
              </div>`
            )
            }else {
              $('#list-image').prepend(
                `<div class="card p-2" style="width: 18rem;">
                <img class="card-img-top" src="${e.urls.full}" alt="Card image cap" style="max-height: 180px;">
                <div class="card-body">
                  <h5 class="card-title">${e.alt_description}</h5>
                  <p class="card-text"></p>
                </div>
              </div>`
            )
            }
            
        });
    })
    .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });
})