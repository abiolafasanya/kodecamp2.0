import model from "./schema.js";

export async function getAllProduct(req, res) {
  const products = await model.find({});
  res.json({
    success: true,
    status: 200,
    data: products,
  });
}
export async function getProduct(req, res) {
  const product = await model.findOne({ _id: req.params.id });
  res.json({
    success: true,
    status: 200,
    data: product,
  });
}
export async function addProduct(req, res) {
  const product = await model.create(req.body);
  res.json({
    success: true,
    status: 201,
    data: product,
  })
}
export async function updateProduct(req, res) {
  const product = await model.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.json({
    success: true,
    status: 200,
    data: products,
  });
}
export async function deleteProduct(req, res) {
  const product = await model.findOneAndDelete({ _id: req.params.id });
  res.json({
    success: true,
    status: 200,
    data: product,
  });
}
export async function searchProduct(req, res) {
  const products = await model.find({
    $where: function () {
      return /^.*${req.params.search}.*$/.test(this.name);
    },
  });
  res.json({
    success: true,
    status: 200,
    data: products,
  });
}
