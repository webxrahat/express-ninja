const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Create a user
// POST /api/users
// public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ username });

  if (userAvailable) {
    res.status(400);
    throw new Error("User Already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id });
  } else {
    res.status(400);
    throw new Error("user data is not valid");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "1h" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("username or password not authenticate");
  }
});

module.exports = { registerUser, loginUser };
