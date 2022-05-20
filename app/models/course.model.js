const mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    name: String,
    description: String,
    satus: { type: Boolean, default: true },
    img: String,
    vd: String,
    lang: String,
    category:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
      }
  },
  { timestamps: true }
);

schema.index({
    name: 'text',
    description: 'text'
});

schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Course = mongoose.model( "Course", schema );

module.exports = Course;
