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
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Component Working!</h1>
      <p>If you can see this, the routing is working.</p>
    </div>
  )
}

function App() {
  console.log('App component rendering...')
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
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
