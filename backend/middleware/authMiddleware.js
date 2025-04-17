const RegisterMiddleware = (req, res, next) => {
  const { firstName, lastName, email, password ,role} = req.body;
  if (!firstName || !lastName || !email || !password || !role) {
    return res.status(400).json({
      message: "All fields  are required.",
    });
  }
  next();
};

const LoginMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields  are required.",
    });
  }
  next();
};

module.exports = { RegisterMiddleware, LoginMiddleware };
