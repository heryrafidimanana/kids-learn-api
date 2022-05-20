const db = require("../models");
const Course = db.course;
const upload = require("../middlewares/upload");
// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  Course.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Create and Save a new Course
exports.create = async (req, res) => {
  //Upload img
  //check img file
  if(!req.body.img/*req.img*/){
    res.status(400).send({ message: "Image is required!" });
    return;
  }
  //Upload
  try {
    await upload(req, res);
    console.log(/*req.body.img*/req.img);
    if (/*req.body.img*/ req.img == undefined) {
      return res.status(400).send({
        message: "You must select a file.",
      });
    }
    // return res.send({
    //   message: "File has been uploaded.",
    // });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "Error when trying upload image: ${error}",
    });
  }
  // Validate request
  if (!req/*.body*/.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Course
  const course = new Course({
    name: req/*.body*/.name,
    description: req/*.body*/.description,
    status: req/*.body*/.status,
    img: req/*.body*/.img,
    vd: req/*.body*/.vd,
    lang: req/*.body*/.lang,
    category: req/*.body*/.category
  });
  // Save Course in the database
  course
    .save(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Course."
      });
    });
};
