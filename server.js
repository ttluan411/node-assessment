var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./userData.json');
var Ctrl = require('./usersCtrl.js');

var app = express();
app.use(bodyParser.json())

app.get('/api/users', Ctrl.getUsers)
app.get('/api/users/:id', Ctrl.getById)
app.get('/api/admins',Ctrl.getAdmins)
app.get('/api/nonadmins',Ctrl.getNonAdmins)
app.get('/api/user_type/:userType', Ctrl.getUserType)

app.put('/api/users/:userId', Ctrl.updateUser)

app.post('/api/users',Ctrl.addUser)

app.delete('/api/users/:id',Ctrl.deleteUser)







app.listen(port, function() {
	console.log('Listening on port',port);
})

