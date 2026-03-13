import { Sidebar } from './components/layout/Sidebar';
import { TopNav } from './components/layout/TopNav';
import { DashboardLayout } from './components/dashboard/DashboardLayout';

function App() {
  return (
    <div className="flex h-screen bg-[#f9f8f8] font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto">
          <DashboardLayout />
        </main>
      </div>
    </div>
  );
}

export default App;
