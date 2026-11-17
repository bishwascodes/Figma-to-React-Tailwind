import { FiMenu } from 'react-icons/fi'

type TopBarProps = {
  onMenuClick: () => void;
};

const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <header className="bg-white border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-10 py-4 lg:py-5 flex justify-between items-center gap-4">
      <div className="flex items-center gap-3 min-w-0">

        {/* Menu button (opens the sidebar below lg) */}
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="text-[#1E293B] lg:hidden"
        >
          <FiMenu className="size-5" />
        </button>

        <p className="text-[#1E293B] font-semibold truncate">Workspace / Overview</p>
      </div>

      <div className="flex items-center gap-4 lg:gap-6 shrink-0">
        {/* Search is hidden on phones to save space */}
        <input
          type="text"
          placeholder="Search employees..."
          className="hidden sm:block w-[185px] rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none focus:border-[#168A73]"
        />
        <div className="size-8 rounded-full bg-[#D9F2E6] text-[#15803D] text-xs font-bold flex items-center justify-center">
          CJ
        </div>
      </div>
    </header>
  );
};

export default TopBar;
