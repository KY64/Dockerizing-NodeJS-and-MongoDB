const   mongoose = require('mongoose'),
        Schema = mongoose.Schema

const menu = new Schema({

    sensor : {
        type : String,
        required : "Name of sensor?",
        unique: true
    },
    value : {
        type: Number,
        required : "Undefined value",
        default : 0
    },
    status : {
        type: String,
        enum: ["Critical", "Warning", "Stable"],
        default: "Stable"
    }
}, { collection: 'Data Sensor'}
)

module.exports = mongoose.model("menu", menu)
