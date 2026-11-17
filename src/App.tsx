import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import MiniDashboard from './components/MiniDashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileCard/>
      <MiniDashboard/>
    </>
  )
}

export default App
