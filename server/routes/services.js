const express = require('express')
var router = express.Router()
const {
  getAllServices,
  getSingleService,
 addService,
  saveService,
	hireService,
  getSaved,
  getHired
} = require("../controllers/servicesController")

router.get("/api/services", getAllServices)
router.get('/api/services/:id', getSingleService)
router.post("/api/services", addService)
router.post('/api/save', saveService)
router.post("/api/hire", hireService)
router.get('/api/saved', getSaved)
router.get("/api/hired", getHired)

module.exports = router
