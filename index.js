var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer();
require('dotenv').config();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  var file = req.file
  if(file === undefined)
  {
    res.send("Please upload a file!")
  }
  else res.json({name: file.originalname, type: file.mimetype, size: file.size})
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
