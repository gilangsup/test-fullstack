import productList from "../../mock/productList";

export default (req, res) => {
  console.log(req.query.name);
  const results = productList.filter((product) =>
    product.name.toLowerCase().includes(req.query.name)
  );
  res.status(200).json({ results });
};
