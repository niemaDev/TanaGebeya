router.post('/', async (req, res) => {
  try {
    const { name, category, price, description, sellerId } = req.body;
    const newProduct = new Product({ name, category, price, description, seller: sellerId });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error saving product" });
  }
});