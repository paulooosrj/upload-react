const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' }).single('imagem');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api', function(req, res){
  upload(req, res, function(err){
    if(err){ return res.end("Error")};
    cloudinary.config({ 
      cloud_name: 'dhyeodezi', 
      api_key: '666499439438643', 
      api_secret: 'HZj-6uXOddDyvPkDyLAzxzmeOlI' 
    });
    cloudinary.uploader.upload(req.file.path, function(result) { 
      if (result.url) {
        res.send(JSON.stringify({url: result.url}));
      } else {
        console.log('Error uploading to cloudinary: ',result);
        res.send('did not get url');
      }
    });
  });
});

app.listen(5000, function(){ 
  console.log("http://localhost:5000 on!!");
});