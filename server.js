let http = require("http");
let fs = require("fs");
http.createServer(function(req,res){
    let url = req.url;
    switch(url){
        case "/": fs.readFile("./login.html", function(err, data){
            if(err) res.write("Error");
            else res.write(data);
            res.end();
        });break;
        case "/inbox": fs.readFile("./inbox.html", function(err, data) {
            if (err) res.write("Error");
            else res.write(data);
            res.end();
        });break;
    }
}).listen(8000);