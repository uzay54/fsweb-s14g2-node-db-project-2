
// HOKUS POKUS
const express = require("express");

const carmodels = require ("./cars-model");

const md = require ("./cars-middleware");

const router = express.Router();

router.get("/",  async (req, res, next) => {
  try {
    const cars = await carmodels.getAll();
    res.json(cars);    
  } catch (error) {
    next(error);
  }
});

router.get("/:id", md.checkCarId,  (req, res, next) => {
  try {
    res.json(req.car);
  } catch (error) {
    next(error);
  }
});

router.post("/", md.checkCarPayload, md.checkVinNumberUnique, md.checkVinNumberValid, async (req, res, next) => {
  try {
    const car = await carmodels.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;