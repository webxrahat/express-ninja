const express = require("express");
const { getContact } = require("../controllers/contactControllers");

const router = express.Router();

router.route("/").get(getContact);
router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create contact" });
});
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get a contact ${req.params.id}` });
});
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `update a contact ${req.params.id}` });
});
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete a contact ${req.params.id}` });
});

module.exports = router;
