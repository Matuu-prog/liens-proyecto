import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1>¡React en mi Lenovo! 🚀</h1>
      <p>Programando desde la universidad</p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#61dafb',
          color: '#282c34',
          fontWeight: 'bold'
        }}
      >
        Contador: {count}
      </button>

      <div style={{ marginTop: '20px', color: '#888' }}>
        Estado del flujo: <b>Listo para GitHub ✅</b>
      </div>
    </div>
  )
}

export default App
