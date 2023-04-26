class ProductManager {
  constructor() {
    this.products = []; // array para almacenar los productos
    this.nextId = 1; // id autoincrementable
  }

  // método para agregar un producto
  addProduct(product) {
    // validar que todos los campos sean obligatorios
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log("Error: Todos los campos son obligatorios.");
      return;
    }

    // validar que no se repita el código
    if (this.products.some(p => p.code === product.code)) {
      console.log("Error: El código ya existe.");
      return;
    }

    // agregar el producto al arreglo con un nuevo id
    this.products.push({
      id: this.nextId++,
      ...product
    });

    console.log("Producto agregado correctamente.");
  }

  // método para obtener todos los productos
  getProducts() {
    return this.products;
  }

  // método para obtener un producto por id
  getProductById(id) {
    const product = this.products.find(p => p.id === id);

    if (!product) {
      console.log("Error: Producto no encontrado.");
      return;
    }

    return product;
  }
}
