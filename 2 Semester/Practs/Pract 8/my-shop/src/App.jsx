import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './components/Product/Product'
import { products } from './products'

function App() {
  let x = "Здарова пацаны";
  const [count, setCount] = useState(0);
  const handleBuy = () => {
    setCount(count + 1);
  }
  return (
  <>
    <h1 style={{textAlign: 'center'}}>{x}</h1>
    <div style={{textAlign: 'center', margin: '20px', fontSize: '1.2rem', fontWeight: 'bold'}}>
      Кількість товарів у кошику: <span style={{color: '#007bff'}}>{count}</span>
    </div>
    <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
      {products.map(p => (
        <Product key={p.id} title={p.title} price={p.price} img={p.img} onBuy={handleBuy} />
      ))}
    </div>
  </>
  );
}

export default App
