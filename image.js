$(document).ready(function(){
    $.ajax({
        url : 'http://localhost:3000/api/search/photos',
        method : 'GET'
    })
    .done(function(image){
        console.log(image);
        image.forEach(e => {
            $('#list-image').prepend(
                `<div class="card p-2" style="width: 18rem;">
                <img class="card-img-top" src="${e.urls.full}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${e.alt_description}</h5>
                  <p class="card-text"><b> Start Date : </b>${e.created_at}</p>
                  <p class="card-text"><b> Local Time : </b>${e.updated_at}</p>
                  <p class="card-text">${e.description}</p>
                  <a href="${e.links.self}" class="btn btn-primary">Buy Ticket</a>
                </div>
              </div>`
            )
        });
    })
    .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });
})