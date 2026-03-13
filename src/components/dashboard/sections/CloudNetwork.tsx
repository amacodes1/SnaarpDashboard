import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { StatCard } from '../StatCard';
import { StorageChart, FileSharingChart } from '../Charts';
import { Button } from '../../ui/Button';
import { ProgressBar } from '../../ui/ProgressBar';
import { SectionHeader } from '../../ui/SectionHeader';
import { Globe, Users, Users2, UploadCloud, Building, FileText, ChevronDown, BarChart2, Activity, User } from 'lucide-react';

export function CloudNetwork() {
  return (
    <div className="space-y-3">
      <SectionHeader icon={Globe} title="Cloud Network" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Left Stats Column */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard title="Users" value="3,836" trend={-15} icon={<Users className="w-4 h-4" />} />
          <StatCard title="Groups" value="316" trend={23} icon={<Users2 className="w-4 h-4" />} />
          <StatCard title="Uploads" value="316" trend={23} icon={<UploadCloud className="w-4 h-4" />} />
          <StatCard title="Departments" value="316" trend={-23} icon={<Building className="w-4 h-4" />} />
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
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6">
                <div className="flex gap-2">
                  <span className="text-orange-500 font-bold">!</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Note</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      You've almost reached your limit<br/>
                      You have used 80% of your available storage. Upgrade plan to access more space.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-xs">
                <LegendItem color="bg-purple-500" label="Files" />
                <LegendItem color="bg-orange-500" label="Folders" />
                <LegendItem color="bg-green-500" label="Videos" />
                <LegendItem color="bg-blue-400" label="Apps" />
                <LegendItem color="bg-red-500" label="Audios" />
                <LegendItem color="bg-blue-600" label="Miscellaneous" />
                <LegendItem color="bg-gray-200" label="Available Space" className="col-span-3 mt-2" />
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button variant="outline" className="text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* File Sharing */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-500" />
              <div>
                <CardTitle>File Sharing</CardTitle>
                <p className="text-xs text-gray-500 font-normal mt-1">Keep track of files and how they're shared</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <button className="p-1.5 bg-indigo-50 text-indigo-600"><BarChart2 className="w-4 h-4" /></button>
                <button className="p-1.5 bg-white text-gray-400 hover:bg-gray-50"><Activity className="w-4 h-4" /></button>
              </div>
              <Button variant="outline" size="sm" className="h-8 text-xs">Month <ChevronDown className="w-3 h-3 ml-1" /></Button>
            </div>
          </CardHeader>
          <CardContent>
            <FileSharingChart />
            <div className="flex justify-center gap-6 mt-4 text-xs text-gray-600">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-indigo-600"></span> Public</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-400"></span> Anyone with link</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-indigo-800"></span> Within Organisation</div>
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
            <Button variant="outline" size="sm" className="h-8 text-xs">Month <ChevronDown className="w-3 h-3 ml-1" /></Button>
          </CardHeader>
          <CardContent className="flex gap-6">
            <div className="w-1/2 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden min-h-[250px]">
              {/* Mock Map Background */}
              <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-indigo-600 text-white text-[10px] px-2 py-1 rounded shadow-md relative">
                  Stanley
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <div className="bg-green-500 text-white text-[10px] px-2 py-1 rounded shadow-md relative">
                  Chisom
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rotate-45"></div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded shadow-md relative">
                  Samuel
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45"></div>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 space-y-5">
              <CountryProgress country="United Kingdom" flag="🇬🇧" value={78} color="bg-indigo-600" />
              <CountryProgress country="Nigeria" flag="🇳🇬" value={61} color="bg-green-500" />
              <CountryProgress country="UAE" flag="🇦🇪" value={45} color="bg-red-500" />
              <CountryProgress country="Canada" flag="🇨🇦" value={59} color="bg-red-500" />
              <CountryProgress country="United States of America" flag="🇺🇸" value={78} color="bg-indigo-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function HardDriveIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg>
}

const LegendItem = ({ color, label, className = "" }: { color: string, label: string, className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`.trim()}>
    <span className={`w-3 h-3 rounded-sm ${color}`}></span>
    <span className="text-gray-600">{label}</span>
  </div>
);

const CountryProgress = ({ country, flag, value, color }: { country: string, flag: string, value: number, color: string }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <span className="text-lg leading-none">{flag}</span> {country}
      </div>
      <span className="text-xs font-semibold text-gray-900">{value}%</span>
    </div>
    <ProgressBar value={value} colorClass={color} />
  </div>
);
