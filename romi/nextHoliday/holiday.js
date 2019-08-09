/* <tr>
<td>Default</td>
<td>Defaultson</td>
<td>def@somemail.com</td>
</tr>       */


    $.ajax({
        url: 'http://localhost:3000/api/calendars/nextpublicholidayscountry/JP',
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