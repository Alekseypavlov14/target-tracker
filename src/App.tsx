import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { TopicsPage } from './features/topics/components/TopicsPage/TopicsPage'
import { SingleTopicPage } from './features/topics/components/SingleTopicPage/SingleTopicPage'
import { AddTargetPage } from './features/targets/components/AddTargetPage/AddTargetPage'
import './App.css'

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<TopicsPage />} />
          <Route path='/topic/:id' element={<SingleTopicPage />} />
          <Route path='/topic/:id/add' element={<AddTargetPage /> } />
        </Route>
      </Routes>
    </div>
  )
}