export function erroHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    error: err.message,
    status: 500,
    message: "Internal Server Error",
  });
  next()
}

// i tried this i get undefined error
 function routeName(moduleName) {
  try {
    const route = import(`./modules/${moduleName}/routes.js`);
    console.log('Inside route function...');
    route();
    console.log(route());
  }
  catch(err) {
    console.log(err);
  }
}

// but this work with commonJs
const routerName = (moduleName) =>  require('./modules/' + moduleName + '/routes.js');
