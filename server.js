var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// use express middleware to redirect traffic to http so we can use the openweather api
app.use(function(req, res, next){
  // if the request is http then great, we move on, otherwise we redirect
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
  console.log('Server started on ' + PORT);
})