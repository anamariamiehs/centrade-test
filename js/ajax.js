
var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});