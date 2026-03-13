import React from 'react';
import { Card, CardContent } from '../../ui/Card';
import { StatCard } from '../StatCard';
import { Button } from '../../ui/Button';
import { SectionHeader } from '../../ui/SectionHeader';
import { Monitor, Zap, ZapOff, Power, PowerOff, Send, Inbox, Download, Grid, Smartphone, Server, Users, Building, Users2, Mail, MailOpen } from 'lucide-react';

export function DeviceManagement() {
  return (
    <div className="space-y-3">
      <SectionHeader 
        icon={Monitor} 
        title="Device Management Dashboard"
        actions={
          <Button variant="default" size="sm" className="h-8 bg-indigo-500 hover:bg-indigo-600">
            <Zap className="w-4 h-4 mr-1" /> Upgrade Plan
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Number of Devices */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <Monitor className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-sm">Number Of Devices</span>
            </div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-2xl font-bold text-gray-900">3,836</h4>
                  <span className="text-green-500 text-xs font-medium flex items-center">↑ 15%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Compared to last week</p>
              </div>
              <div className="w-20 h-8"><MiniSparkline color="green" /></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1"><Zap className="w-3 h-3" /> Plugged</div>
                <div className="font-semibold text-gray-900">1,923</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-1"><ZapOff className="w-3 h-3" /> Unplugged</div>
                <div className="font-semibold text-gray-900">1,913</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
              <DeviceStat icon={<Grid className="w-3 h-3 text-blue-500"/>} label="Windows" count="1,403 devices" />
              <DeviceStat icon={<Smartphone className="w-3 h-3 text-gray-700"/>} label="Mac" count="632 devices" />
              <DeviceStat icon={<Server className="w-3 h-3 text-orange-500"/>} label="Linux" count="1,801 devices" />
            </div>
          </CardContent>
        </Card>

        {/* Users */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-sm">Users</span>
            </div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-2xl font-bold text-gray-900">3,836</h4>
                  <span className="text-red-500 text-xs font-medium flex items-center">↓ 15%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Compared to last week</p>
              </div>
              <div className="w-20 h-8"><MiniSparkline color="red" /></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-1 text-xs text-green-500 mb-1"><Power className="w-3 h-3" /> Active</div>
                <div className="font-semibold text-gray-900">592</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs text-red-500 mb-1"><PowerOff className="w-3 h-3" /> Offline</div>
                <div className="font-semibold text-gray-900">3,836</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
              <DeviceStat icon={<Building className="w-3 h-3 text-gray-500"/>} label="Organizations" count="1,403 users" />
              <DeviceStat icon={<Building className="w-3 h-3 text-gray-500"/>} label="Departments" count="632 users" />
              <DeviceStat icon={<Users2 className="w-3 h-3 text-gray-500"/>} label="Groups" count="1,801 users" />
            </div>
          </CardContent>
        </Card>

        {/* Right Column (Emails & Downloads) */}
        <div className="grid grid-rows-2 gap-6">
          <Card>
            <CardContent className="p-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-sm">Emails</span>
                </div>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h4 className="text-2xl font-bold text-gray-900">316</h4>
                      <span className="text-red-500 text-xs font-medium flex items-center">↓ 23%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Compared to last week</p>
                  </div>
                  <div className="w-16 h-6"><MiniSparkline color="red" /></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-1"><Send className="w-3 h-3" /> Sent</div>
                  <div className="font-semibold text-gray-900">592</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-1"><Inbox className="w-3 h-3" /> Received</div>
                  <div className="font-semibold text-gray-900">3,836</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                <DeviceStat icon={<MailOpen className="w-3 h-3 text-gray-500"/>} label="Read" count="1,403 emails" />
                <DeviceStat icon={<Mail className="w-3 h-3 text-gray-500"/>} label="Unread" count="632 emails" />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <StatCard title="Number of Apps" value="316" trend={-23} icon={<Grid className="w-4 h-4" />} sparklineColor="red" />
            <StatCard title="Number of Downloads" value="316" trend={23} icon={<Download className="w-4 h-4" />} sparklineColor="green" />
          </div>
        </div>
      </div>
    </div>
  );
}

const DeviceStat = ({ icon, label, count }: { icon: React.ReactNode, label: string, count: string }) => (
  <div className="text-center">
    <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500 mb-0.5">
      {icon} {label}
    </div>
    <div className="text-[10px] font-medium text-gray-900">{count}</div>
  </div>
);

const MiniSparkline = ({ color }: { color: "green" | "red" }) => {
  const strokeColor = color === "green" ? "#10B981" : "#EF4444";
  const pathData = color === "green" ? "M0,10 Q5,8 10,9 T20,5 T30,8 T40,2 T50,0" : "M0,0 Q5,2 10,1 T20,5 T30,2 T40,8 T50,10";
  return (
    <svg viewBox="0 0 50 10" className="w-full h-full overflow-visible" preserveAspectRatio="none">
      <path d={pathData} fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
