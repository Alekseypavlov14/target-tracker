import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { TopicsPage } from './features/topics'
import './App.css'

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<TopicsPage />} />
        </Route>
      </Routes>
    </div>
  )
}