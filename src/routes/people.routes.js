const { Router } = require("express");
const router = Router();
const peopleController = require('../controllers/people.controller.js')

// CRUD FOR PEOPLE

router.get("/", peopleController.getPeople);

router.post("/", peopleController.createPerson);

router.get("/:id", peopleController.getPerson);

router.get("/:name", peopleController.getPersonByName);

router.put("/:id", peopleController.editPerson);

router.delete("/:id", peopleController.deletePerson);

module.exports = router;
