export function erroHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
      error: err.message,
      status: 500,
      message: "Internal Server Error",
    });
    next()
  }