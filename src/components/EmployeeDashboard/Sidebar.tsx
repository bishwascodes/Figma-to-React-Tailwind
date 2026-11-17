import { FiX } from 'react-icons/fi'
import NavItem from './NavItem'

const workspaceLinks = ['Overview', 'Employees', 'Projects', 'Reports'];
const managementLinks = ['Settings', 'Help Center'];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    // Below lg: slide-out drawer over the page. lg and up: always visible on the left.
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-[210px] shrink-0 bg-[#1A2B42] flex flex-col px-4 py-6 transition-transform duration-200 lg:static lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >

      {/* Logo */}
      <div className="flex items-center gap-3 px-2">
        <div className="size-8 rounded-lg bg-[#2BB596] text-white font-bold text-lg flex items-center justify-center">
          N
        </div>
        <span className="text-white font-bold text-lg">Northstar</span>

        {/* Close button (drawer only) */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="ml-auto text-[#94A3B8] hover:text-white lg:hidden"
        >
          <FiX className="size-5" />
        </button>
      </div>

      {/* Workspace links */}
      <p className="mt-10 mb-3 px-2 text-[10px] font-semibold tracking-wider text-[#94A3B8]">
        WORKSPACE
      </p>
      <nav className="flex flex-col gap-1">
        {workspaceLinks.map((link) => (
          <NavItem key={link} label={link} active={link === 'Overview'} />
        ))}
      </nav>

      {/* Management links */}
      <p className="mt-10 mb-3 px-2 text-[10px] font-semibold tracking-wider text-[#94A3B8]">
        MANAGEMENT
      </p>
      <nav className="flex flex-col gap-1">
        {managementLinks.map((link) => (
          <NavItem key={link} label={link} />
        ))}
      </nav>

      {/* Current user */}
      <div className="mt-auto border-t border-[#334155] pt-4 px-2 flex items-center gap-3">
        <div className="size-9 rounded-full bg-[#E8B996] text-[#7C3F1D] text-xs font-bold flex items-center justify-center">
          CJ
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Casey Jordan</p>
          <p className="text-[#94A3B8] text-xs">Administrator</p>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
