import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import MiniDashboard from './components/MiniDashboard'
import EmployeeDashboard from './components/EmployeeDashboard'
import './App.css'

// Each tab: the button label and the page it shows
const pages = [
  { label: 'Profile Card', component: <ProfileCard /> },
  { label: 'Mini Dashboard', component: <MiniDashboard /> },
  { label: 'Employee Dashboard', component: <EmployeeDashboard /> },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="min-h-screen bg-[#F1F5F9]">

      {/* Page Tabs */}
      <nav className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] px-6 py-3 flex gap-2">
        {pages.map((page, index) => (
          <button
            key={page.label}
            onClick={() => setActiveIndex(index)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              index === activeIndex
                ? 'bg-[#234E70] text-white'
                : 'text-[#475569] hover:bg-[#F1F5F9]'
            }`}
          >
            {page.label}
          </button>
        ))}
      </nav>

      {/* Selected Page */}
      {pages[activeIndex].component}
    </div>
  )
}

export default App
