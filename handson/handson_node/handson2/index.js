const express = require('express');
const server = express();
server.get('/api/main',(req,res)=>{
    res.send(JSON.stringify({name:'satish',topic:'nodejs'}));
    res.end()
})
server.listen(9000,()=>{
    console.log('server started')
})