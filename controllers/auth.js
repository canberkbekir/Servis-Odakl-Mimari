const express = require("express");


function Add(a,b) {
    return a+b
}
exports.register = async (req, res) => {
  console.log(Add(5,6))
  return res.render("index", {
    message: Add(5,6),
  });
  
};
