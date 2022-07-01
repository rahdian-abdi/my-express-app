const { people } = require("../data");

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ status: "failed", msg: "please provide name" });
  }
  res.status(201).json({ status: "success", data: [...people, name] });
};

const getPeople = (req, res) => {
  return res.status(200).json({ status: "success", data: people });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ status: "failed", msg: `no person with this ${id}` });
  }
  const newPerson = people.map((p) => {
    if (p.id === Number(id)) {
      p.name = name;
    }
    return p;
  });
  res.status(200).json({ status: "success", data: newPerson });
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ status: "failed", msg: `no person with this ${id}` });
  }

  const newPerson = people.filter((p) => p.id !== Number(id));

  return res.status(200).json({ status: "success", data: newPerson });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
