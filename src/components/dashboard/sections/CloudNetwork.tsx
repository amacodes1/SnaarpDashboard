import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card";
import { StatCard } from "../StatCard";
import { useState } from "react";
import {
  StorageChart,
  FileSharingChart,
  FileSharingLineChart,
} from "../Charts";
import { Button } from "../../ui/Button";
import { ProgressBar } from "../../ui/ProgressBar";
import { SectionHeader } from "../../ui/SectionHeader";
import { ActiveUsersMap } from "../ActiveUsersMap";
import {
  Globe,
  Users,
  Users2,
  UploadCloud,
  Building,
  FileText,
  ChevronDown,
  BarChart2,
  Activity,
  User,
} from "lucide-react";
import GBflag from "../../../assets/GB-flag.webp";
import NGflag from "../../../assets/Nigeria-flag.webp";
import UAEflag from "../../../assets/uae-flag.jpg";
import CAflag from "../../../assets/canada-flag.webp";
import USflag from "../../../assets/usa-flag.webp";

export function CloudNetwork() {
  const [fileSharingView, setFileSharingView] = useState<"bar" | "line">("bar");

  return (
    <div className="space-y-2">
      <SectionHeader icon={Globe} title="Cloud Network" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Left Stats Column */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard
            title="Users"
            value="3,836"
            trend={-15}
            icon={<Users className="w-4 h-4" />}
          />
          <StatCard
            title="Groups"
            value="316"
            trend={23}
            icon={<Users2 className="w-4 h-4" />}
          />
          <StatCard
            title="Uploads"
            value="316"
            trend={23}
            icon={<UploadCloud className="w-4 h-4" />}
          />
          <StatCard
            title="Departments"
            value="316"
            trend={-23}
            icon={<Building className="w-4 h-4" />}
          />
        </div>

        {/* Storage Card */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <HardDriveIcon className="w-5 h-5 text-gray-500" />
              <CardTitle>Storage</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <StorageChart />
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white border-x-4 border-orange-300 rounded-lg px-4 py-2 mb-6 shadow-[0_-2px_6px_rgba(0,0,0,0.06),0_10px_18px_rgba(0,0,0,0.10)]">
                <div className="flex gap-2">
                  <span className="text-orange-300 font-bold">!</span>
                  <div>
                    <h4 className="text-xs font-bold text-purple-500">Note</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      You've almost reached your limit
                      <br />
                      You have used 80% of your available storage. Upgrade plan
                      to access more space.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-y-2 gap-x-4 text-xs">
                <LegendItem color="bg-purple-500" label="Files" />
                <LegendItem color="bg-orange-500" label="Folders" />
                <LegendItem color="bg-green-500" label="Videos" />
                <LegendItem color="bg-blue-400" label="Apps" />
                <LegendItem color="bg-red-500" label="Audios" />
                <LegendItem color="bg-blue-600" label="Miscellaneous" />
                <LegendItem
                  color="bg-gray-200"
                  label="Available Space"
                  className="col-span-3 mt-2"
                />
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* File Sharing */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-500" />
              <div>
                <CardTitle>File Sharing</CardTitle>
                <p className="text-xs text-gray-500 font-normal mt-1">
                  Keep track of files and how they're shared
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <button
                  type="button"
                  aria-label="Bar chart view"
                  onClick={() => setFileSharingView("bar")}
                  className={
                    fileSharingView === "bar"
                      ? "p-1.5 bg-indigo-50 text-indigo-600"
                      : "p-1.5 bg-white text-gray-400 hover:bg-gray-50"
                  }
                  title="Bar Chart"
                >
                  <BarChart2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Line chart view"
                  onClick={() => setFileSharingView("line")}
                  className={
                    fileSharingView === "line"
                      ? "p-1.5 bg-indigo-50 text-indigo-600"
                      : "p-1.5 bg-white text-gray-400 hover:bg-gray-50"
                  }
                  title="Line Chart"
                >
                  <Activity className="w-4 h-4" />
                </button>
              </div>
              <Button variant="outline" size="sm" className="h-8 text-xs">
                Month <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {fileSharingView === "bar" ? (
              <FileSharingChart />
            ) : (
              <FileSharingLineChart />
            )}
            <div className="flex justify-center gap-6 mt-4 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-indigo-600"></span>{" "}
                Public
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-blue-400"></span> Anyone
                with link
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-indigo-800"></span>{" "}
                Within Organisation
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-500" />
              <CardTitle>Active Users</CardTitle>
            </div>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              Month <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="flex gap-6">
            <div className="w-1/2 rounded-lg border border-gray-100 overflow-hidden min-h-[250px]">
              <ActiveUsersMap className="w-full h-[250px]" />
            </div>

            <div className="w-1/2 space-y-5">
              <CountryProgress
                country="United Kingdom"
                flag={GBflag}
                value={78}
                color="bg-green-500"
              />
              <CountryProgress
                country="Nigeria"
                flag={NGflag}
                value={61}
                color="bg-green-500"
              />
              <CountryProgress
                country="UAE"
                flag={UAEflag}
                value={45}
                color="bg-green-500"
              />
              <CountryProgress
                country="Canada"
                flag={CAflag}
                value={59}
                color="bg-green-500"
              />
              <CountryProgress
                country="United States of America"
                flag={USflag}
                value={78}
                color="bg-green-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function HardDriveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="12" y2="12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" x2="6.01" y1="16" y2="16" />
      <line x1="10" x2="10.01" y1="16" y2="16" />
    </svg>
  );
}

const LegendItem = ({
  color,
  label,
  className = "",
}: {
  color: string;
  label: string;
  className?: string;
}) => (
  <div className={`flex items-center gap-2 ${className}`.trim()}>
    <span className={`w-3 h-3 rounded-sm ${color}`}></span>
    <span className="text-gray-600">{label}</span>
  </div>
);

const CountryProgress = ({
  country,
  flag,
  value,
  color,
}: {
  country: string;
  flag: string;
  value: number;
  color: string;
}) => (
  <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2">
    <img
      src={flag}
      alt={`${country} flag`}
      className="w-9 h-6 rounded-md object-cover flex-shrink-0"
    />
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between gap-3">
        <span className="truncate text-sm font-medium text-gray-500">
          {country}
        </span>
        <span className="text-xs font-semibold text-gray-900">{value}%</span>
      </div>
      <div className="mt-2">
        <ProgressBar value={value} colorClass={color} />
      </div>
    </div>
  </div>
);
