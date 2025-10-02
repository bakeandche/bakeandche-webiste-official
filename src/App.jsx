import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Location } from './pages/Location'
import { Menu } from './pages/Menu'
import { Career } from './pages/Career'
import { Reward } from './pages/Reward'
import { Contact } from './pages/Contact'
import { Auth } from './pages/Auth'
import { Admin } from './pages/Admin'
import { Layout } from './components/layout/Layout'
import { RequireAuth } from './components/common/RequireAuth'
import { AuthProvider } from './hooks/useAuth.jsx'
import './styles/App.css'

// Simple test component to debug
function TestComponent() {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '20px' }}>
        🎉 Bake and Che Website is Working!
      </h1>
      <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '20px' }}>
        If you can see this, the routing is working perfectly.
      </p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/about" style={{ padding: '10px 20px', backgroundColor: '#91b33b', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          About
        </a>
        <a href="/menu" style={{ padding: '10px 20px', backgroundColor: '#edb956', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Menu
        </a>
        <a href="/location" style={{ padding: '10px 20px', backgroundColor: '#2c2c2c', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Location
        </a>
        <a href="/admin" style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Admin
        </a>
      </div>
    </div>
  )
}

function App() {
  console.log('App component rendering...')
  
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<TestComponent />} />
          <Route path="/test" element={<TestComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/career" element={<Career />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
