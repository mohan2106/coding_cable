var axios = require('axios');
var data = JSON.stringify({"emailId":"MohanJnv","password":"12345678"});

var config = {
  method: 'post',
  url: 'http://localhost:4000/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
