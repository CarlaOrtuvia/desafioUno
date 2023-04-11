/*----------------------------------------Primer Desafio------------------------------------------------------------*/

class ProductManager {
    constructor() {
      this.products = [];
      this.current_id = 1;
    }
  
    addProduct(title, description, price, thumbnail, stock) {
      
        /*Validar que todos los campos sean obligatorios*/
      
        if (!title || !description || !price || !thumbnail || !stock) {
        console.log("Error: todos los campos son obligatorios");
        return;
      }
  
      /* Validar que no se repita el código*/

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === this.current_id) {
          this.current_id += 1;
        }
      }
  
      /* Agregar el producto al arreglo*/
      const product = {
        title,
        description,
        price,
        thumbnail,
        id: this.current_id,
        stock
      };
      this.products.push(product);
      this.current_id += 1;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          return this.products[i];
        }
      }
      console.log("Error: Producto no encontrado");
    }
  }
  const pm = new ProductManager();
  pm.addProduct("Producto 1", "Descripción del producto 1", 10.99, "ruta/de/imagen1.png", 100);
  pm.addProduct("Producto 2", "Descripción del producto 2", 15.99, "ruta/de/imagen2.png", 50);
  const productos = pm.getProducts();
  const producto1 = pm.getProductById(1);
  const producto3 = pm.getProductById(3); 