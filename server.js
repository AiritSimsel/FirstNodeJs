const express = require('express');
const app = express();

app.get('/', (request, response)=>{    //request (edaspidi req) > andmed mis tulevad kasutaja poolt serverile
    console.log(request);              //response (edaspidi res) > serveri vastus
    response.send('Hello World!');
});

app.get('/contact', (req, res)=>{
    res.send('123456789');
});

app.get('*', (req, res)=>{             //see peab lõpus olema!
    res.send("404 not found");
});

app.listen(3000, function(){
    console.log("Server is running on 3000");
});     //browserisse localhost:3000 > tulemus Cannot GET / 
        // CTRL + C > paneb serveri seisma * npm start käima




