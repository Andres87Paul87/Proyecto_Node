// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    const inventoryList = document.getElementById('inventory');
    const addProductForm = document.getElementById('product-form');
    const productNameInput = document.getElementById('product-name');
    const productDescriptionInput = document.getElementById('product-description');

    // Función para obtener y mostrar todos los productos desde la API
    async function fetchProducts() {
        try {
            const response = await fetch('http://localhost:3000/api/crear');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const products = await response.json();

            inventoryList.innerHTML = ''; // Limpia la lista de productos

            // Recorre los productos y crea elementos para cada uno
            products.forEach(product => {
                const productElement = document.createElement('li');
                productElement.textContent = `${product.name} - Description: ${product.description} - Fecha: ${product.dateAdded}`;
                inventoryList.appendChild(productElement); // Añade el producto a la lista
            });
        } catch (error) {
            console.log('Error al obtener los productos:', error);
        }
    }


// Función para agregar un producto mediante petición POST
    async function addProduct(event) {
        event.preventDefault();

        const newProduct = {
            name: productNameInput.value,
            description: productDescriptionInput.value
        };

        try {
            const response = await fetch('http://localhost:3000/api/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct) // Convierte el nuevo producto en una cadena JSON
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            fetchProducts();
            addProductForm.reset();
        } catch (error) {
            console.log('Error al añadir el producto:', error); // Maneja errores de la solicitud
        }
    }

    // Escuchador de eventos para el formulario
    addProductForm.addEventListener('submit', addProduct);

    // Llama a la función para cargar los productos al inicio
    fetchProducts();



});