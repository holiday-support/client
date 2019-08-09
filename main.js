// const axios = require('axios')
$(document).ready(function() {
  

  
})
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('Token: ' + googleUser.getAuthResponse().id_token);
    AddToServer(googleUser.getAuthResponse().id_token)
}

function AddToServer(token){
    $.ajax({
        url: 'http://localhost:3000/api/user',
        method: 'POST',
        data: {
          id_token : token,
        },
      })
      .done(function(token) {
        // $('#student-list').prepend('<li>' + newStudent.name + '</li>');
        console.log(token.token)
        localStorage.setItem('token' , token.token)
        // $('#login-form').hide()
        // $('#dashboard').show()
        localStorage.setItem('username' , token.username)
        // console.log('nerdfkmgdkgmf====================><><><><><><><><')
      })
      .fail(function(jqXHR, textStatus) {
        console.log('Error:', textStatus);
      });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      localStorage.clear()
    });
}