
var request = require('request');
 
request({
  url: 'https://identity.primaverabss.com/core/connect/token',
  method: 'POST',
  auth: {
    user: '<IE-PROJETO-GRUPO4>', // TODO : put your application client id here
    pass: '<0b93eb27-cb48-456c-ab00-a549b31997cd>' // TODO : put your application client secret here
  },
  form: {
    'grant_type': 'client_credentials',
    'scope': 'application',
  }
}, function(err, res) {
  if (res) {
	var json = JSON.parse(res.body);
    console.log("Access Token:", json.access_token);
    
  }
  else {
    console.log("Could not obtain acess token.");
  }
});

//pinguinadela