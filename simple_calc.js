const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// app.get('view-engine','ejs')
// app.get('/',(res,req) =>{
//     res.render('calculator.ejs')
// })
app.set('view-engine' ,'ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res) => {
    const button = req.query.button;
    let result;
  
    switch (button) {
      case '0':
        result = '0';
        break;
      case '1':
        result = '1';
        break;
      case '2':
        result = '2';
        break;
      case '3':
        result = '3';
        break;
      case '4':
        result = '4';
        break;
      case '5':
        result = '5';
        break;
      case '6':
        result = '6';
        break;
      case '7':
        result = '7';
        break;
      case '8':
        result = '8';
        break;
      case '9':
        result = '9';
        break;
      case '+':
        result = '+';
        break;
      case '-':
        result = '-';
        break;
      case '*':
        result = '*';
        break;
      case '/':
        result = '/';
        break;
      case '.':
        result = '.';
        break;
      case 'DEL':
        result = 'DEL';
        break;
      default:
        result = 'Invalid button';
    }
  
    res.send(result);
  });

app.get('/',(req,res) => {
    res.send(result)
})
app.listen(7500,() =>{
    console.log("server is running")
})