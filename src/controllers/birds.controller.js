const Person = require("../models/Person");

const peopleController = {};

peopleController.getPeople = async (req, res) => {
  const people = await Person.find();
  res.json(people);
};

peopleController.createPerson = async (req, res) => {
  const newPerson = new Person(req.body);
  await newPerson.save();
  res.send({ message: "Person Created" });
};

peopleController.getPerson = async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.send(person);
};

peopleController.getPersonByName = async (req, res) => {
  const parameter = req.params;
  res.send({ message: parameter });
};

peopleController.editPerson = async (req, res) => {
  const editedPerson = await Person.findByIdAndUpdate(req.params.id, req.body)
  res.json({status: "Person updated"})
  res.send(editedPerson)
}

peopleController.deletePerson = async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ status: "Person deleted" });
};

module.exports = peopleController;
