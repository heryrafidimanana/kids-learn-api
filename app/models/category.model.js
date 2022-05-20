const mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    name: String
  },
  { timestamps: true }
);

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Category = mongoose.model( "Category", schema );

module.exports = Category;
