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
import './styles/App.css'

function App() {
  console.log('App component rendering...')
  
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
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
