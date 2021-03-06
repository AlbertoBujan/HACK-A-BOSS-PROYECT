"use strict";
const express = require("express");
const validateAuth = require("../middleware/validate-auth");

const addBand = require("../controllers/bands/add-band");
const deleteBandByUserId = require("../controllers/bands/delete-band-by-user-id");
const getBandByLocation = require("../controllers/bands/get-band-by-location");
const getBandByLookingForMusician = require("../controllers/bands/get-band-by-lookingForMusician");
const getBandByLookingForGig = require("../controllers/bands/get-band-by-lookingForGig");
const getBandByMovility = require("../controllers/bands/get-band-by-movility");
const getBands = require("../controllers/bands/get-bands");
const updateBand = require("../controllers/bands/update-band");
const getBandByName = require("../controllers/bands/get-band-by-name");
const addGenreToBand = require("../controllers/bands/add-genre");
const deleteGenreToBand = require("../controllers/bands/delete-genre");
const getBandByGenre = require("../controllers/bands/get-band-by-genre");
const contactToMusician = require("../controllers/bands/contact-band-to-musician");
const getAllContractRequests = require("../controllers/bands/get-all-contract-requests");
const replyContractRequest = require("../controllers/bands/reply-contract-request-by-request-id");
const getBandsWithGenre = require("../controllers/bands/get-bands-with-genre");
const router = express.Router();

router.route("/").get((req, res) => getBands(req, res));

router.route("/withgenres").get((req, res) => getBandsWithGenre(req, res));

router
  .route("/contracts")
  .all(validateAuth)
  .get((req, res) => getAllContractRequests(req, res));

router
  .route("/contract-reply")
  .all(validateAuth)
  .post((req, res) => replyContractRequest(req, res));

router
  .route("/contact-musician")
  .all(validateAuth)
  .post((req, res) => contactToMusician(req, res));

router
  .route("/add")
  .all(validateAuth)
  .post((req, res) => addBand(req, res));

router
  .route("/:id")
  .all(validateAuth)
  .delete((req, res) => deleteBandByUserId(req, res));

router
  .route("/location/:location")
  .get((req, res) => getBandByLocation(req, res));

router
  .route("/lookingformusician/:response")
  .get((req, res) => getBandByLookingForMusician(req, res));

router
  .route("/lookingforgig/:response")
  .get((req, res) => getBandByLookingForGig(req, res));

router
  .route("/movility/:movility")
  .get((req, res) => getBandByMovility(req, res));

router.route("/name/:name").get((req, res) => getBandByName(req, res));

router.route("/genre/:genre").get((req, res) => getBandByGenre(req, res));

router
  .route("/")
  .all(validateAuth)
  .put((req, res) => updateBand(req, res));

router
  .route("/addgenre")
  .all(validateAuth)
  .post((req, res) => addGenreToBand(req, res));

router
  .route("/")
  .all(validateAuth)
  .delete((req, res) => deleteGenreToBand(req, res));

module.exports = router;
