const http = require('http');
http
    .createServer((req, res) => {
        // //200 정상 상태
        // res.writeHead(200, {'content-Type': 'text/html'});
        // res.end('<p>Hello Word!</p>')

        //분기 처리
        if(req.url === '/'){
            res.writeHead(200);
            res.end('main url')
        }else if(req.url === '/upload'){
            res.writeHead(200);
            res.end('upload url')
        }else if(req.url === '/delete'){
            res.writeHead(200);
            res.end('delete url')
        }else {
            res.writeHead(404);
            res.end('Not Found!')
        }
    })
    .listen(3000, () => {
        console.log("3000번 포트 서버 접속 완료!");
    });