import { Bell, Menu, Search } from "lucide-react";

export function TopNav({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-16 mx-2 sm:mx-3 my-3 bg-white rounded-md flex items-center justify-between px-3 sm:px-4 sticky top-0 z-10 gap-3">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <button
          type="button"
          aria-label="Open sidebar"
          onClick={onMenuClick}
          className="md:hidden p-2 bg-gray-100 rounded-md text-black hover:text-gray-600"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex-1 max-w-2xl relative min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for users, groups or settings"
            className="w-full sm:w-3/4 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 bg-gray-100 rounded-md text-black hover:text-gray-600"
        >
          <Bell className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center bg-gray-100 rounded-md p-2 gap-2 text-sm">
          <span className="text-black whitespace-nowrap">Agent Code:</span>
          <span className="text-blue-400 font-medium whitespace-nowrap">
            036502j37742y3b38
          </span>
          <button
            type="button"
            className="text-black hover:text-gray-600"
            title="Copy"
            aria-label="Copy agent code"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
