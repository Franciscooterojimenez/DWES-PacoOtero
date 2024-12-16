const fetch = require('node-fetch');

async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log("Post Data:", data);
}

getPost();