const mongoose  = require('mongoose');
const RandomSchema = new mongoose.Schema ({
    text: {
        type: String,
        required: true
    }
})
;
module.exports = mongoose.model('Tweet', RandomSchema)
;
