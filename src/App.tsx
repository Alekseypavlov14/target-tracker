import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import './App.css'

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<div>Hello</div>} />
          <Route path='/app' element={<div>App</div>} />
          <Route path='/world' element={<div>World</div>} />
          <Route path='/' element={<div>Hello</div>} />
          <Route path='/' element={<div>Hello</div>} />
        </Route>
      </Routes>
    </div>
  )
}