const products = [
  {
    id: 1,
    name: 'Mechanical Keyboard',
    price: 2500,
    stock: 10,
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 890,
    stock: 4,
  },
  {
    id: 3,
    name: 'USB-C Cable',
    price: 350,
    stock: 20,
  },
]

function App() {
  return (
    <main>
      <h1>Inventory Management System</h1>
      <p>Manage products and stock.</p>

      <h2>product</h2>

      <ul>
        {products.map((product) =>
          <li key={product.id}>
            {product.name} — ฿{product.price} — Stock: {product.stock}
          </li>
        )}
      </ul>
    </main>
  )
}

export default App
