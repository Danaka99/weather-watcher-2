import User from "../models/User.js";

// @desc Add a new user
// @route POST /users
export const addUser = async (req, res, next) => {
  const { email, location } = req.body;
  try {
    const user = new User({ email, location });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    return next(error);
  }
};

// @desc Update user's location
// @route PUT /users/:email
export const updateUser = async (req, res) => {
  const { email } = req.params;
  const { location } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { location },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    const error = new Error(err.message);
    error.status = 400;
    return next(error);
  }
};
