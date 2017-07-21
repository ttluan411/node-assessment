var data = require('./userData.json');
module.exports = {
    getUsers: function (req,res) {
        if(req.query.age){
            var young = data.filter( el => el.age < req.query.age)
            res.status(200).json(young)
        } else if (req.query.lastname) {
            var lastname = data.filter( el => el.last_name === req.query.lastname)
            res.status(200).json(lastname)
        } else if (req.query.email) {
            var email = data.filter(el => el.email === req.query.email)
            res.status(200).json(email)
        } else if (req.query.favorites) {
            var favorites= data.filter(el => el.favorites.includes(req.query.favorites))
            res.status(200).json(favorites)
        } else {
            res.status(200).json(data)
        }
    },
    getById: function (req,res) {
        var userId = data.filter(el => el.id == req.params.id)
        console.log(userId)
        if(userId.length){
            res.status(200).json(userId)
            
        } else {
            res.status(404).json(null)
           
        }
    },
    getAdmins: function (req,res){
        var Admin = data.filter(el=> el.type === "admin")
        res.status(200).json(Admin)
    },
    getNonAdmins: function (req,res){
        var NonAd = data.filter(el=>el.type !== "admin")
        res.status(200).json(NonAd)
    },
    getUserType: function (req,res) {
        var userType = data.filter(el => el.type === req.params.userType)
        res.status(200).json(userType)
    },
    updateUser: function (req,res) {
        data = data.map( el => {
            if (el.id == req.params.userId){
                el = req.body
            }
            return el
        })
        res.status(200).json(data)
    },
    addUser: function (req,res) {
        if(!req.body.id) {
        req.body.id = data[data.length -1].id +1}
        data.push(req.body);
        res.status(200).json(data)
    },
    deleteUser: function (req,res) {
        data = data.filter(el=> el.id != req.params.id)
        res.status(200).json(data)
    }
}