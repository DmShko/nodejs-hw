const express = require('express');

const {authentificate, upload}  = require('../../middlewares');

const ctrl = require("../../controllers/auth");

const router = express.Router() ;

// singUp
router.post("/register", ctrl.register);

// singIn
router.post("/login", ctrl.login);

// verificate
router.get("/verify/:verificationCode", ctrl.verifyEmail);

// verify againe if the letter did not arrive
router.post("/verify", ctrl.resendVerifyEmail);

// logOut
router.post("/logout", authentificate, ctrl.logout);

// get current user
router.get("/current", authentificate, ctrl.getCurrent);

// get current user
router.patch("/subscription", authentificate, ctrl.updateSubscriptionUser);

module.exports = router;