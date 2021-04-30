var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:4000/home/courseCatalog',
  url: 'http://localhost:4000/home/faqALL',      
  url: 'http://localhost:4000/home/faqTop5',
  url: 'http://localhost:4000/home/courseDetails?id=5',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
