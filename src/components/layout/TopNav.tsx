import { Search, Bell } from "lucide-react";

export function TopNav() {
  return (
    <header className="h-16 mx-3 my-3 bg-white rounded-md flex items-center justify-between px-3 sticky top-0 z-10">
      <div className="flex-1 max-w-2xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for users, groups or settings"
          className="w-3/4 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
      </div>

      <div className="flex items-center gap-6 ml-4">
        <button className="relative p-2 bg-gray-100 rounded-md text-black hover:text-gray-600">
          <Bell className="w-5 h-5" />
          {/* <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span> */}
        </button>

        <div className="flex items-center bg-gray-100 rounded-md p-2 gap-2 text-sm">
          <span className="text-black">Agent Code:</span>
          <span className="text-blue-400 font-medium">036502j37742y3b38</span>
          <button className="text-black hover:text-gray-600" title="Copy">
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
