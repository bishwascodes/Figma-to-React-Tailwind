const PageHeader = () => {
  return (
    // Stacked on phones, side by side from sm up
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
      <div>
        <h1 className="text-[#1E293B] font-bold text-2xl sm:text-3xl">Team overview</h1>
        <p className="text-[#64748B] text-sm mt-1">
          Here's what's happening across your team today.
        </p>
      </div>

      <button className="w-full sm:w-auto shrink-0 bg-[#168A73] hover:bg-[#127562] text-white text-sm font-semibold px-7 py-3 rounded-lg">
        + Add employee
      </button>
    </div>
  );
};

export default PageHeader;
