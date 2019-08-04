const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
 
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'))

app.get('/',(req,res) => {
    res.render('home');
});

app.listen(port,console.log(`Example app listening on port ${port}!`));