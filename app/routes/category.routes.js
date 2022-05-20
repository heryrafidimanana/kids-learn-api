module.exports = app => {
  const categorys = require("../controllers/category.controller.js");
  var router = require("express").Router();
  // Create a new Category
  router.post("/", categorys.create);
  // Retrieve all Categorys
  router.get("/", categorys.findAll);
  // Retrieve a single Category with id
  router.get("/:id", categorys.findOne);
  // Update a Category with id
  router.put("/:id", categorys.update);
  // Delete a Category with id
  router.delete("/:id", categorys.delete);
  // Delete all Categorys
  router.delete("/", categorys.deleteAll);
  app.use('/api/categorys', router);
};
