const   express = require('express'),
        mongoose = require('mongoose'),
        app = express(),
        port = 3000,
        model = require('./model/model')
        route = require('./router/router')

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/tesDB`, { useNewUrlParser: true, useCreateIndex: true, autoReconnect: true, reconnectTries: 30, reconnectInterval: 500})

var dbb = mongoose.connection;
dbb.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.urlencoded({extended: true}))
app.use(express.json())
route(app)

app.listen(port, function() {
    console.log("Berhasil cuy! koneksi ke port " + port)
})
