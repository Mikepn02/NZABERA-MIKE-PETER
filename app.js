const express = require('express')
const app = express ()
const bodyParser = express()

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/indexs.html')
})
app.post('',(req,res)=> {
    const number1 = req.body.num1
    const number2=req.body.number2
    const add = number1 + number2
    res.send('The value is' +add)
})
app.listen(7600,() =>{
    console.log("server is running")
})