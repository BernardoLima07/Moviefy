const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.AUTHORIZATION_KEY}`,
  },
};

export default options;
