const   mongoose = require('mongoose'),
        Menu = mongoose.model("menu")

exports.daftarMenu = function(req,res) {
    Menu.find({}, function(err, menu) {
        if(err) res.send(err)
        res.json(menu)
    })
}

exports.tambahMenu = function(req,res) {
    var menuBaru = new Menu(req.body)
    menuBaru.save(function(err, menu) {
        if(err) res.send(err)
        res.json(menu)
    })
}

exports.pilihMenu = function(req,res) {
    Menu.findById(req.params.menuId, function(err,menu) {
        if(err) res.send(err)
        res.json(menu)
    })
}

exports.ubahMenu = function(req,res) {
    Menu.findOneAndUpdate({ _id: req.params.menuId }, req.body,
        { new: true }, function(err, menu) {
            if(err) res.send(err)
            res.json(menu)
    })
}

exports.hapusMenu = function(req,res) {
    Menu.remove({_id : req.params.menuId}, function(err, menu) {
        if(err) res.send(err)
        res.json(menu)
    })
}

exports.hapusSemua = function(req,res) {
    Menu.remove({}, function(err, menu) {
        if(err) res.send(err)
        res.json(menu)
    })
}