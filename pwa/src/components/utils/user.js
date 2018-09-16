const isLoggedIn = () => {
  return {
    status: true,
    id: 123456,
    name: "Dave AShenhurst",
    pic: "pic location somewhere on web",
    added: "2018-09-06T17:54:08.075Z"
  };
};

const login = (user, password) => {
  return {
    status: true,
    id: 123456,
    name: "Dave AShenhurst",
    pic: "pic location somewhere on web",
    added: "2018-09-06T17:54:08.075Z"
  };
};

const logout = () => {
  return {
    status: false
  };
};

const signUp = (email, name, pwd) => {
  return {
    status: true,
    id: 123456,
    name: name,
    pic: "pic location somewhere on web",
    added: "2018-09-06T17:54:08.075Z"
  };
};

const profile = id => {
  return {
    status: true,
    id: 123456,
    name: "Dave Ashenhurst",
    pic: "pic location somewhere on web",
    added: "2018-09-06T17:54:08.075Z"
  };
};

export { isLoggedIn, login, logout, signUp, profile };
