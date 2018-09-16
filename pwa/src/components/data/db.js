const getById = scanned => {
  return {
    id: 123456,
    name: "bolognese",
    pic: "pic location somewhere on web",
    added: "2018-09-06T17:54:08.075Z"
  };
};

const addNewId = jsonObj => {
  // Add ID TO Database
  return {
    id: 123456,
    name: "fish supper",
    pic: "pic location somewhere on web",
    added: new Date()
  };
};

const allActiveIds = filter => {
  return [
    {
      id: 123456,
      name: "spag bog",
      description: "made with chillis",
      pic: "pic location somewhere on web",
      added: "2018-09-06T17:54:08.075Z"
    },
    {
      id: 789011,
      name: "Chicken Curry",
      pic: "pic location somewhere on web",
      description: "mild, kids, 2 portions",
      added: "2018-09-06T17:54:08.075Z"
    }
  ];
};

export { getById, addNewId, allActiveIds };
