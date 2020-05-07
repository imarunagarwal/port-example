const express = require('express');
const path = require('path')
var app = express();


app.use(express.static(__dirname+'/dist/port-client'));

app.get('/*',function(request,response){
    response.sendFile(path.join(__dirname,'/dist/port-client/index.html'))
});

app.listen(3000 || process.env.PORT,() => {
    console.log(`Server is listening on port `);
});





