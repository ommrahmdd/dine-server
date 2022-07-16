const { json, query } = require("express");
let Dine = require("./../models/dineSchema");

exports.getAllProducts = async function (req, res) {
  try {
    console.log(req.query);
    let page = req.query.page * 1 || 1;
    let limit = req.query.limit * 1 || 10;
    let skip = (page - 1) * limit || 0;
    let query = await Dine.find().skip(skip).limit(limit);
    let products = await query;
    res.status(200).json({
      status: "Success",
      result: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
