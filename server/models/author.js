const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"An author name is required"],
        minlength: [3,"Author name must be at least 3 characters"]
    },
    book1: {
        type: String
    },
    book2: {
        type: String
    },
    book3: {
        type: String
    }
},{timestamps: true})


mongoose.model("Author",AuthorSchema);