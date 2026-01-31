import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatInterface from './components/ChatInterface'
import Home from './pages/Home'
import ClassTenthBelow from './pages/ClassTenthBelow'
import StreamSelection from './pages/StreamSelection'
import Engineering from './pages/Engineering'
import Medical from './pages/Medical'
import Commerce from './pages/Commerce'
import Arts from './pages/Arts'
import AIImpact from './pages/AIImpact'
import Resources from './pages/Resources'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class-10-below" element={<ClassTenthBelow />} />
            <Route path="/stream-selection" element={<StreamSelection />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/ai-impact" element={<AIImpact />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
        <ChatInterface />
      </div>
    </Router>
  )
}

export default App