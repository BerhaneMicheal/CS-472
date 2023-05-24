const app = require('express') (); 
app.use((req, res, next) => {
 console.log('${req.url}');
next();
});
app.get('/test', (req, res) => { 
res.send('ok');
});
var server = app.listen (3000, function () {
    console.log('server is running');
});