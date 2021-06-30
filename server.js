const express = require('express');
const cors = require('cors');
const app = express();
// This line will configure the cors origin for the browser 
app.use(cors({origin:'https://api.diana.opensource.softshape.org/'}));

app.use('/accounts/login', (req, res,next) => {
  res.header("Access-Control-Allow-Origin", "https://api.diana.opensource.softshape.org/");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  res.send({
    token: 'test123'
  });
});


app.post('/accounts/login',function(req,res){
  var username = req.body.username;
  var username = req.body.password;
  var htmlData = 'Hello:' + username + password;
  res.send(htmlData);
  console.log(htmlData);
});

app.listen(8081, () => console.log('API is running on http://localhost:8081'));