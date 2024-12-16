import http from 'http';

// Create & configure server
const server = http.createServer((req, res) => {
  res.end('Request accepted');
});

// Server listen at...
server.listen(3000, () => {
  console.log('Server ready to receive  requests');
});
