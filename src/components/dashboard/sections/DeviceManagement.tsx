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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
              <div className="w-20 h-8">
                <svg viewBox="0 0 100 60" className="w-24 h-16 overflow-visible" preserveAspectRatio="none">
                  <path
                    d="M0,50 L15,45 L30,40 L45,30 L60,20 L75,10 L90,5 L100,0"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0,50 L15,45 L30,40 L45,30 L60,20 L75,10 L90,5 L100,0 L100,60 L0,60 Z"
                    fill="url(#gradient-green)"
                    stroke="none"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient-green" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="pb-4 border-b border-gray-200 mb-4"></div>
            
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
              <div className="w-20 h-8">
                <svg viewBox="0 0 100 60" className="w-24 h-16 overflow-visible" preserveAspectRatio="none">
                  <path
                    d="M0,0 L15,5 L30,10 L45,20 L60,30 L75,40 L90,45 L100,50"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0,0 L15,5 L30,10 L45,20 L60,30 L75,40 L90,45 L100,50 L100,60 L0,60 Z"
                    fill="url(#gradient-red)"
                    stroke="none"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient-red" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="pb-4 border-b border-gray-200 mb-4"></div>
            
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

        {/* Emails */}
        <Card>
          <CardContent className="p-5">
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
              <div className="w-16 h-6">
                <svg viewBox="0 0 100 60" className="w-24 h-16 overflow-visible" preserveAspectRatio="none">
                  <path
                    d="M0,0 L15,5 L30,10 L45,20 L60,30 L75,40 L90,45 L100,50"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0,0 L15,5 L30,10 L45,20 L60,30 L75,40 L90,45 L100,50 L100,60 L0,60 Z"
                    fill="url(#gradient-red-2)"
                    stroke="none"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient-red-2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="pb-4 border-b border-gray-200 mb-3"></div>
            
            <div className="grid grid-cols-2 gap-4">
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

        {/* Right Column (Apps & Downloads) */}
        <div className="flex flex-col gap-3">
          <StatCard title="Number of Apps" value="316" trend={-23} icon={<Grid className="w-4 h-4" />} sparklineColor="red" />
          <StatCard title="Number of Downloads" value="316" trend={23} icon={<Download className="w-4 h-4" />} sparklineColor="green" />
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