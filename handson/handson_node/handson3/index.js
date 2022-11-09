const express = require('express');
const app = express();

const middleware1 = (req,res,next)=>{
    console.log('middle ware 1')
    next()
}

const middleware2 = (req,res,next)=>{
    console.log('middle ware 2 global')
    next()
}

app.use(middleware2);

app.get('/route1',middleware1,(req,res)=>{
    res.send('<h1>This is route1 with both middlewares</h1>')
    res.end()
})

app.get('/route2',(req,res)=>{
    res.send('<h1>This is route2 with middleware 2</h1>')
    res.end()
})

app.get('/route3',middleware1,(req,res)=>{
    res.send('<h1>This is route3 with both middlewares</h1>')
    res.end()
})

app.get('/route4',(req,res)=>{
    res.send('<h1>This is route4 with middleware 2</h1>')
    res.end()
})

app.listen(3000,()=>console.log('server started'))