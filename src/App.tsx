import { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { TopNav } from "./components/layout/TopNav";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";

function App() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[100dvh] bg-[#f9f8f8] font-sans min-w-0">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar drawer */}
      {mobileSidebarOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <Sidebar
            showCloseButton
            onClose={() => setMobileSidebarOpen(false)}
            className="absolute left-0 top-0 h-full w-72 max-w-[80vw] shadow-xl"
          />
        </div>
      ) : null}

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopNav onMenuClick={() => setMobileSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
}

export default App;
