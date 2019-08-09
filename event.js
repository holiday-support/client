$(document).ready(function(){
    $.ajax({
        url : 'http://localhost:3000/api/ticketmaster/events/CA',
        method : 'GET'
    })
    .done(function({event}){
        console.log(event);
        event.forEach(e => {
            $('#getEvents').prepend(
                `<div class="card p-2" style="width: 18rem;">
                <img class="card-img-top" src="${e.images}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${e.name}</h5>
                  <p class="card-text"><b> Start Date : </b>${e.startDate}</p>
                  <p class="card-text"><b> Local Time : </b>${e.localTime}</p>
                  <p class="card-text">${e.note}</p>
                  <a href="${e.url}" class="btn btn-primary">Buy Ticket</a>
                </div>
              </div>`
            )
        });
    })
    .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });

    
})