import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Location } from './pages/Location'
import { Menu } from './pages/Menu'
import { Career } from './pages/Career'
import { Reward } from './pages/Reward'
import { Contact } from './pages/Contact'
import { Layout } from './components/Layout'
import './styles/App.css'

function App() {
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
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
