const epxress = require("express");
let dineController = require("./../controllers/dineController");
let router = epxress.Router();

router.route("/products").get(dineController.getAllProducts);

module.exports = router;
