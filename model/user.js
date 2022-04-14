const mongoose = require("mongoose");

var User = mongoose.Schema({


    emp_id: {
        type: Number,
       required: true,
    },

    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 2,
        required: true,
    },
});

// User.virtual("id").get(function () {
//     return this._id.toHexString();
// });



//User.virtual('categoryId').get(function () {
  //  return this._id;
//});

//User.set("toJSON", {
  //  virtuals: true,
//});

module.exports = mongoose.model("user", User);



