const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const {validateBody} = require("../../middlewars");

const {schemas} = require("../../models/users");

router.post("/register",validateBody(schemas.registerSchema),ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login)

module.exports = router;