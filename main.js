
if(localStorage.getItem(`token`)){
  console.log('an kfdnfelbvhfbgfr')
  $('#login-form').hide()
  $('#image').hide()
}
$(document).ready(function() {
  
  
  
})
$("#myInput").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#myList li").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  }); 
});

$.ajax({
    url : "http://localhost:3000/api/calendars/",
    method : 'GET'
})
.done(function(data){

    data.forEach(e => {
        $('#myList').prepend(
            `<li class="list-group-item" ><a href ="#" onclick="toEven('${e.key}','${e.value}')">${e.value}</a></li>`
        )
    });
})
.fail(function(jqXHR, textStatus) {
    console.log('Error:', textStatus);
  });
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    // $('')
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('Token: ' + googleUser.getAuthResponse().id_token);
    AddToServer(googleUser.getAuthResponse().id_token , profile.getName())
    $('#login-form').hide()
    $('#input').show()
    $('#isi').hide()
    $('#h2-o').html(`Hello, ${profile.getName()}`)
}

function AddToServer(token , nameUser){
    $.ajax({
        url: 'http://localhost:3000/api/user',
        method: 'POST',
        data: {
          id_token : token,
        },
      })
      .done(function(token) {
        console.log(token.token)
        console.log(token.name, ' ===============+++<><><><><><><><<>>><><>')
        $('#login-form').hide()
        localStorage.setItem('token' , token.token)
        localStorage.setItem('username' , token.name)
        $('#content').show()
        $('#image').hide()
      })
      .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      $('#login-form').show()
      $('#content').hide()
      $('#image').hide()
      localStorage.clear()
    });
}

function RenderImage(){
  $('#image').show()
  $('#content').hide()
}