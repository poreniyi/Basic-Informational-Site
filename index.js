let url=require('url');
let http= require('http');
let fs= require('fs');

http.createServer(function(req,res){
    let q=url.parse(req.url, true);
    let filename= "./projectDir/"+q.pathname;//need to change
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type' :'text/html'});
            return res.end("404 NOT FOUND");
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
