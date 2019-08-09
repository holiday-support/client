function toEven(code , name){
    event.preventDefault();
    // console.log(name , '====fdsfdsfdsf-ds=f-dsfdsklmflkdsmfkldsmf')
    // console.log('okdsfndkojsfnjdfndskfndjkfndskjfn98324u580245045435454357')
    // console.log(code)
    $('#getEvents').empty()
    $('#list-image').empty()
    $('#isi').show()
    $('#input').hide()
    $.ajax({
        url : `http://localhost:3000/api/ticketmaster/events/${code}`,
        method : 'GET'
    })
    .done(function({event}){
        if(event){
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
        }else {
            $('#getEvents').prepend(
                `
                <center>  
                    <div class="alert alert-danger" role="alert">
                    <h6> Oops, there is nothing event on going yet!</h6>
                        </div>
                </center>
                      
                `
            )
        }
    })
    .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });
    $.ajax({
        url : `http://localhost:3000/api/search/photos?name=${name}`,
        method : 'GET'
    })
    .done(function(image){
        console.log(image);
        image.forEach(e => {
            if( e.description){
                if(e.description.length > 200){
                    e.description =  e.description.substring(0,150) + '...'
                }
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


      $.ajax({
        url: `http://localhost:3000/api/calendars/nextpublicholidayscountry/${code}`,
        method: 'GET'
    })
    .done(function(cal){
        cal.forEach(e=>{
            $('#dataHoliday').prepend(
                `       <tr>
                            <td>${e.date}</td>
                            <td>${e.localName}</td>
                            <td>${e.name}</td>
                        </tr>  `    
            )
    
        })
        
    
        })
    
    .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
    });
    ///,fldsfdkfosf
    
}
