var express = require('express');
var path = require('path');
var multer = require('multer');
var sassMiddleware = require('node-sass-middleware');

var portToUse = process.env.PORT || 8080;

var app = express();

app.use(sassMiddleware(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views')));

app.post('/', multer().single('uploadFile'), function(req,res){
    
    var tempObj = {}
    
    if(req.file == undefined) {
        tempObj['ERROR'] = 'No file provided'
    } else {
        tempObj['size'] = req.file.size
    }
    
    res.json(tempObj);
});

app.listen(portToUse, function() {
    console.log("Server started, listening on port", portToUse);
});