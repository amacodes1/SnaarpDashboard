import {
  BarChart2,
  Building2,
  CreditCard,
  FileText,
  HardDrive,
  HelpCircle,
  LayoutDashboard,
  Monitor,
  Settings,
  User,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Building2, label: "Organization & Reg." },
  { icon: BarChart2, label: "Reporting" },
  { icon: CreditCard, label: "Billing" },
  { icon: User, label: "Account" },
  { icon: HardDrive, label: "Storage" },
  { icon: Settings, label: "Settings" },
  { icon: Monitor, label: "Device Management" },
  { icon: FileText, label: "Productivity Report" },
];

export function Sidebar({
  className,
  onClose,
  showCloseButton,
}: {
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}) {
  return (
    <aside
      className={cn(
        "w-56 border-r border-gray-200 bg-white flex flex-col md:h-screen md:sticky md:top-0",
        className,
      )}
    >
      <div className="p-6 flex items-center justify-center relative">
        {showCloseButton ? (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-50 text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        ) : null}

        <span className="text-2xl font-bold text-gray-900">Snaarp</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              item.active
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-gray-200 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <User className="w-5 h-5" /> User Panel
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <HelpCircle className="w-5 h-5" /> Support
        </a>

        <div className="border-t">
          <div className="mt-4 flex items-center gap-3 px-3 py-2">
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium text-gray-900">
                Chidinma Snaarp
              </span>
              <span className="text-xs text-gray-500 truncate">
                admin@example.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
