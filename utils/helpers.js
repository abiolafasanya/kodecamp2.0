export function erroHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error: err.message,
    status: 500,
    message: "Internal Server Error",
  });
  next()
}

// export async function route(moduleName) {
//   try {
//     const moduleA =await import(`./modules/${moduleName}/routes.js`);
//     console.log('Inside route function...');
//     moduleA();
//     console.log(moduleA);
//   }
//   catch(err) {
//     console.log(err);
//   }
// }
