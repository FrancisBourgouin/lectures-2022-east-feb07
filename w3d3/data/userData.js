const user1 = {
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  avatar: "🎩",
  password: "paris",
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  avatar: "🏎️",
  password: "rosa",
};

// const userDatabaseIsh = [user1, user2]; // BAD BECAUSE HARD TO SEARCH & MANIPULATE

const userDatabaseIsh = {
  "pontiac@bandit.com": user2,
  "gentleman@cambrioleur.com": user1,
};

module.exports = userDatabaseIsh;
