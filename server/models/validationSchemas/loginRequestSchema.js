const loginSchema = {
  emailId: { isEmail: true },
  password: {
    isLength: {
      errorMessage: "Password should be at least 3 chars long",
      options: { min: 3 },
    },
  },
  loginIPaddress: {
    isIP: {
      errorMessage: "Invalid IP address",
    },
  },
};

export default loginSchema;
