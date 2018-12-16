const axios = require("axios");

// Request API.
axios
  .get('http://localhost:1337/posts', {
    params: {
      _sort: 'created_at:desc' // Generates http://localhost:1337/posts?_sort=created_at:desc
    }
  })
  .then(response => {
    // Handle success.
    console.log('Well done, here is the list of posts: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });