var express = require("express");
var fs = require("fs");

var content = fs.readFileSync("content.json", "utf8");
var users = JSON.parse(content);
var listCount = 10

var app = express();

app.get("/api/restaurants", function(req, res){
    var page = parseInt(req.query["page"])
    if (page * listCount >= users.count)
    {
        res.send([]) 
    }
    var end = ((page + 1) * listCount)
    var result = users.slice(page * listCount, end)
    res.send(result);
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Сервер ожидает подключения...");
});