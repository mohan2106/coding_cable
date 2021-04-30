var axios = require('axios');
var data = JSON.stringify({"_id":{"$oid":"6068b2ec797f4b2159cba186"},"Name":"MohanJnv","EmailId":"mohan@cc.com","Phone_Number":"","Hashed_Password":"$2b$10$uHkTk9XA9c80LVScJoFXre9E7HMaYRJrh.HdgmO8V0tTtBaruOXRS","Guardian_Details":{"Name":"","Phone_Number":"","Email":""},"Profile_Pic":"","Batches":{}});


var config = {
  method: 'post',
  url: 'http://localhost:4000/register',
  headers: { 
    'Content-Type': 'application/json',
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
