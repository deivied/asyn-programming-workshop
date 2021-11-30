const http = require('http');
const url = require('url');

const host = 'http://localhost';
const port = "8090";


const server = http.createServer(function (req, res) {
    let path = url.parse(req.url, true);
    let method = req.method;
    
    res.setHeader('Content-Type', 'application/json');

    switch (method) {
        case 'GET':
            if (path.pathname === '/todos') {
                res.end(`
                    [
                        {
                            "id":1,
                            "task":"To read all emails",
                            "isDone":false
                        },
                        {
                            "id":2,
                            "task":"To read all emails",
                            "isDone":true
                        },
                        {
                            "id":3,
                            "task":"To read all emails",
                            "isDone":false
                        }
                    ]
                `)
            }
            break; 
    
        default:
            res.end(`
                {"Message": ":)"}
            `)
            break;
    }
});

server.listen(port, function () {
    console.log(`Server listening on ${host}:${port}`)
});

//TODO: completer l'implementation de ce
// server afin de repondre sur GET /todos
// et POST /todo ({task:'something'})
// et avec fetch ajouter et recuperer les todos 
// d'une maniere asynchrone (DOM)

// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));