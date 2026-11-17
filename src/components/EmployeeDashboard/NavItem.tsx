type NavItemProps = {
  label: string;
  active?: boolean;
};

const NavItem = ({ label, active = false }: NavItemProps) => {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm ${
        active
          ? 'bg-[#2A3D56] text-white font-semibold'
          : 'text-[#CBD5E1] hover:bg-[#22344C] hover:text-white'
      }`}
    >
      {/* Active indicator */}
      <span
        className={`size-3 rounded-sm ${active ? 'bg-[#2BB596]' : 'bg-transparent'}`}
      />
      {label}
    </a>
  );
};

export default NavItem;
