const testController = (req, res) => {
  console.log(req.body, "rcved Data");

  res.status(200).json({
    message: "Data received successfully",
    data: req.body,
  });
};

module.exports = { testController };
