import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { Suspense } from 'react'
import { AppRouter } from './routes/router'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </Router>
  )
}

export default App
