const jwt = require("jsonwebtoken");
const User = require("./user-model");
const AppError = require("./utils/app-error");
const asyncHandler = require("./utils/async");
const { OTPGenerator, sendOTP } = require("./utils/otp");

const signToken = (otp, email) => {
  return jwt.sign({ otp, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

/**
 * Registers a user
 * @route POST /api/auth/register
 * @access public
 */
exports.register = asyncHandler(async (req, res, next) => {
  const { username, email, ethAccount, dob } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return next(new AppError("User Already Exist", 400));
  }

  user = await User.create({ username, email, ethAccount, dob });
  res.status(201).json({ status: "success" });
});

/**
 * Logins a user
 * @route POST /api/auth/login
 * @access public
 */
exports.login = asyncHandler(async (req, res, next) => {
  const { email, dob } = req.body;

  if (!email || !dob) {
    return next(new AppError("Please provide a email and dob", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("Invalid user", 401));
  }

  const isMatch = user.dob === dob;
  if (!isMatch) {
    return next(new AppError("Invalid user", 401));
  }

  const otp = OTPGenerator();
  await sendOTP(user.email, otp);

  res.status(200).json({ otpToken: signToken(otp, email) });
});

/**
 * Logins a user
 * @route POST /api/auth/verifyotp
 * @access public
 */
exports.verifyOTP = asyncHandler(async (req, res, next) => {
  const { otp, otpToken } = req.body;

  try {
    const decoded = jwt.verify(otpToken, process.env.JWT_SECRET);

    if (decoded.otp === otp) {
      const user = await User.findOne({ email: decoded.email });
      return res.status(200).json({ success: true, user });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * Logins a user
 * @route POST /api/auth/admin
 * @access public
 */
exports.admin = asyncHandler(async (req, res, next) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASS) {
    return res.status(200).json({ success: true });
  }

  res.status(401).json({ success: false });
});

/**
 * Gets all users
 * @route GET /api/auth/users
 * @access public
 */
exports.users = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });
});
