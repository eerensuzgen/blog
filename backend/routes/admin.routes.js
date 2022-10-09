const router = require("express").Router();
let Admin = require("../models/admin.model");

router.route("/").get((req, res) => {
  Admin.find()
    .then((Admin) => res.json(Admin))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/newAdmin").post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const createdAt = req.body.createdAt;

  const newAdmin = new Admin({
    name,
    username,
    password,
    createdAt,
  });

  newAdmin
    .save()
    .then(() => res.json("Admin added!"))
    .catch((err) => res.status(200).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Admin.findById(req.params.id)
    .then((Admin) => res.json(Admin))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Admin.findByIdAndDelete(req.params.id)
    .then(() => res.json("Admin deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateAdmin/:id").post((req, res) => {
  Admin.findById(req.params.id)
    .then((Admin) => {
      Admin.name = req.body.name;
      Admin.username = req.body.username;
      Admin.password = req.body.password;
      Admin.createdAt = req.body.createdAt;

      Admin.save()
        .then(() => res.json("Admin updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
