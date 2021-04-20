const express = require("express");
const app = express();

app.get('/',function(req, res){
    res.send("Backend apis");

});

app.listen(8080, function(){
    console.log("local server started on local host");
});