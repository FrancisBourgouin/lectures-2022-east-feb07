const authenticateUser = (userDB, email, password) => {
  if (!userDB[email]) {
    return { error: "bad email", data: null };
  }

  if (userDB[email].password !== password) {
    return { error: "bad password", data: null };
  }

  return { error: null, data: userDB[email] };
};

const fetchUserInformation = (userDB, email) => {
  let userInfo = undefined;

  if (userDB[email]) {
    userInfo = userDB[email];
  } else {
    userInfo = {};
  }

  return userInfo;
};

const createUser = (userDB, userInfo) => {
  const { email, name, avatar, password } = userInfo;

  if (!email || !name || !avatar || !password) {
    return { error: "one of the fields is invalid", data: null };
  }

  if (userDB[email]) {
    return { error: "account already exists", data: null };
  }

  const newUser = { email, name, avatar, password };
  userDB[email] = newUser;

  return { error: null, data: newUser };
};

module.exports = { fetchUserInformation, authenticateUser, createUser };
