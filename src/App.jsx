import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import Layout from './components/Layout'
import Daily from './pages/Daily'
import Study from './pages/Study'
import Library from './pages/Library'
import Phrase from './pages/Phrase'

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/"           element={<Daily />} />
            <Route path="/study"      element={<Study />} />
            <Route path="/library"    element={<Library />} />
            <Route path="/phrase/:slug" element={<Phrase />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProgressProvider>
  )
}
