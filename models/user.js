const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(email) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
            }
        }
    },
    role: {
        type: String,
        enum: [ 'admin', 'customer'],
        default: 'customer'
    }

}, { timestamps: true })

const User = mongoose.model('User', userSchema);
module.exports = User;