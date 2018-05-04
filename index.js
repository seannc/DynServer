const express = require("express");
var app = express();

const port = process.env.PORT || 3000;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/awesome", function(req, resp){
    resp.end("YOU ARE AWESOME");
});
app.get("/send", function(req, resp){
    resp.end("send nodes");
});

var names = [];
app.get("/names/:myname", function(req,resp){
    var myname = req.params.myname;
    names.push(myname);
    
    resp.send(names);
});

app.listen(port, function(err){
    if(err){
        console.log("GAME OVER: "+err);
        return false;
    }
    
    console.log("PORT IS OPENED FOR H@X!");
});