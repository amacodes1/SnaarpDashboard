import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { StatCard } from '../StatCard';
import { EmailChart, TotalEmailChart } from '../Charts';
import { Button } from '../../ui/Button';
import { SectionHeader } from '../../ui/SectionHeader';
import { FileText, ChevronDown, Zap, Clock, Calendar, Users, Globe, Mail, BarChart2, Activity } from 'lucide-react';

export function ProductivityReport() {
  return (
    <div className="space-y-4">
      <SectionHeader 
        icon={FileText} 
        title="Productivity Report"
        actions={
          <Button variant="default" size="sm" className="h-8 bg-indigo-500 hover:bg-indigo-600">
            <Zap className="w-4 h-4 mr-1" /> Upgrade Plan
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Hours Productivity" value="576 Hrs" trend={-15} icon={<Clock className="w-4 h-4" />} sparklineColor="red" />
        <StatCard title="Days Activity" value="267 Days" trend={15} icon={<Calendar className="w-4 h-4" />} sparklineColor="green" />
        <StatCard title="Users" value="3,836" trend={-15} icon={<Users className="w-4 h-4" />} sparklineColor="red" />
        <StatCard title="Web Activity" value="178 Activities" trend={15} icon={<Globe className="w-4 h-4" />} sparklineColor="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email Chart */}
        <Card className="col-span-1">
          <CardHeader className="pb-0">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <CardTitle>Email Chart</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-6">
            <EmailChart />
            
            <div className="flex justify-center gap-4 mt-8 text-xs text-gray-600 w-full">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-amber-500"></span> Sent</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-blue-500"></span> Received</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-gray-200"></span> Unsent</div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">TOTAL EMAILS SENT</p>
              <p className="text-2xl font-bold text-gray-900">5,421</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Email Area Chart */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <CardTitle>Total Email</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <button className="p-1.5 bg-white text-gray-400 hover:bg-gray-50" title="Bar Chart"><BarChart2 className="w-4 h-4" /></button>
                <button className="p-1.5 bg-indigo-50 text-indigo-600" title="Line Chart"><Activity className="w-4 h-4" /></button>
              </div>
              <Button variant="outline" size="sm" className="h-8 text-xs">Month <ChevronDown className="w-3 h-3 ml-1" /></Button>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <TotalEmailChart />
            {/* Custom Tooltip Overlay Simulation */}
            <div className="absolute top-10 right-20 bg-indigo-50 border border-indigo-100 rounded-lg p-3 shadow-sm text-xs w-40">
              <div className="flex justify-between mb-1"><span className="text-gray-500">Sent</span> <span className="font-medium">683</span></div>
              <div className="flex justify-between mb-1"><span className="text-gray-500">Received</span> <span className="font-medium">932</span></div>
              <div className="flex justify-between mb-2"><span className="text-gray-500">Unsent</span> <span className="font-medium">32</span></div>
              <div className="flex justify-between bg-indigo-500 text-white rounded px-2 py-1 -mx-1"><span className="font-medium">Total</span> <span className="font-bold">1,747</span></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
