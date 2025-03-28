import React, { useEffect, useState} from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

//funcion Cargar un Producto
export default function Products() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });


    // Función para obtener productos de Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products")); // Asegúrate de que la colección existe
      const fetchedProducts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts); // Actualiza el estado con los productos obtenidos
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
    };


    // Cargar productos cuando el componente se monte (actulizar estado?)
    useEffect(() => {
        fetchProducts();
      }, []);
    
      const handleInputChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value});
      };

          // Función para agregar un producto a Firestore
    const addProduct = async () => {
        if (!newProduct.name || !newProduct.price || !newProduct.image){
          alert("complete la informacion del producto");
          return
        }
    
        try {
          const docRef = await addDoc(collection(db, "products"), newProduct);
          console.log("producto agregado exitosamente con el id:", docRef.id);
          setNewProduct({ name: "", description: "", price: "", image: ""}); // limpiar
          fetchProducts(); // Recargar los productos después de agregar uno nuevo
        } catch (error) {
          console.error("Error al agregar el producto:", error);
        }
      };

    // Eliminar un producto de Firebase
    const deleteProduct = async (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
        if (!confirmDelete) return;
  
        try {
          await deleteDoc(doc(db, "products", id));
          console.log("Producto eliminado:", id);
          fetchProducts(); // Recargar productos
        } catch (error) {
          console.error("Error al eliminar el producto:", error);
        }
      };

  return (
    <div>
                <h1>Productos</h1>
            <div>
                <input type="text" name="name" placeholder="Nombre del producto" value={newProduct.name} onChange={handleInputChange} />
                <input type="text" name="description" placeholder="Descripción" value={newProduct.description} onChange={handleInputChange} />
                <input type="number" name="price" placeholder="Precio" value={newProduct.price}          onChange={handleInputChange}        />
                <input          type="text"          name="image"          placeholder="URL de la imagen"          value={newProduct.image}          onChange={handleInputChange}        />
                <button onClick={addProduct}>Agregar Producto</button>
            </div>

            {
                products.length > 0 ? (
                    products.map((product) => (
                <div key={product.id} style={{ position: "relative", textAlign: "center" }}>
                    <h1>{product.name} </h1>
                    <p>{product.description}</p>
                    <p><strong>Precio: </strong>${product.price}</p>
                    <img src={product.image} alt={product.name} style={{ width: "100px", height:"100px"}} />
                    <br/>
                    <button onClick={() => deleteProduct(product.id)}>Eliminar</button>           
                </div>
                    ))
                    ) : ( 
                    <p>no hay productos disponibles</p> )

            }
    </div>

    
    );
}
