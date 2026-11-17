import { useState } from 'react'
import { FiUser, FiFileText, FiCheck, FiAlertCircle, FiPlus } from 'react-icons/fi'
import Sidebar from './EmployeeDashboard/Sidebar'
import TopBar from './EmployeeDashboard/TopBar'
import PageHeader from './EmployeeDashboard/PageHeader'
import StatCard from './EmployeeDashboard/StatCard'
import TeamMembers from './EmployeeDashboard/TeamMembers'
import RecentActivity from './EmployeeDashboard/RecentActivity'
import { type Employee } from './EmployeeDashboard/EmployeeRow'
import { type Activity } from './EmployeeDashboard/ActivityItem'

const employees: Employee[] = [
  { name: 'Avery Morgan', email: 'avery@northstar.co', role: 'UI Designer', status: 'Active', avatarTone: 'orange' },
  { name: 'Jordan Lee', email: 'jordan@northstar.co', role: 'Developer', status: 'Active', avatarTone: 'blue' },
  { name: 'Sam Rivera', email: 'sam@northstar.co', role: 'Product Manager', status: 'On leave', avatarTone: 'purple' },
  { name: 'Taylor Kim', email: 'taylor@northstar.co', role: 'Developer', status: 'Active', avatarTone: 'green' },
];

const activities: Activity[] = [
  { title: 'Project completed', meta: 'Website refresh · 2h ago', icon: FiCheck, tone: 'green' },
  { title: 'New team member', meta: 'Morgan joined · Yesterday', icon: FiPlus, tone: 'blue' },
  { title: 'Review requested', meta: 'Mobile app · Yesterday', icon: FiAlertCircle, tone: 'orange' },
];

const EmployeeDashboard = () => {
  // Controls the slide-out sidebar on screens smaller than lg
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-[#F1F5F9]">

      {/* Side Navigation */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Dark backdrop behind the open drawer; click it to close */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
        />
      )}

      <div className="flex-1 min-w-0">

        {/* Top Bar */}
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8">

          {/* Page Header */}
          <PageHeader />

          {/* Team Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mt-6">
            <StatCard title="Total employees" value={48} note="+6 this month" icon={FiUser} tone="green" />
            <StatCard title="Active projects" value={12} note="+2 this month" icon={FiFileText} tone="blue" />
            <StatCard title="Tasks completed" value={186} note="+18% this week" icon={FiCheck} tone="purple" />
            <StatCard title="Pending reviews" value={7} note="Needs attention" icon={FiAlertCircle} tone="orange" />
          </div>

          {/* Team Members & Recent Activity */}
          {/* Side by side only from xl, so the table isn't squeezed next to the sidebar */}
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 sm:gap-5 mt-6">
            <TeamMembers employees={employees} totalCount={48} />
            <RecentActivity activities={activities} />
          </div>

        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
