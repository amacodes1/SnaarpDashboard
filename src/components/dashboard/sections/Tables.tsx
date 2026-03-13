import { Card, CardContent } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { ProgressBar } from '../../ui/ProgressBar';
import { User, ChevronDown, Activity, Globe } from 'lucide-react';

const onlineUsersData = [
  { name: 'Annette Black', location: 'Ottawa, Canada', org: 'MSBM, Ottawa', device: 'Windows', activity: 'Google Chrome', time: '3 hours 12 minutes', status: 'online', avatar: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Floyd Miles', location: 'Lagos, Nigeria', org: 'MSBM, Lagos', device: 'Windows', activity: 'Instagram', time: '2 hours 8 minutes', status: 'online', avatar: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Ronald Richards', location: 'Dubai, UAE', org: 'MSBM, Dubai', device: 'Mac', activity: 'Microsoft Teams', time: '6 hours 45 minutes', status: 'away', avatar: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Guy Hawkins', location: 'London, UK', org: 'MSBM, London', device: 'Windows', activity: 'Instagram', time: '1 hour 30 minutes', status: 'online', avatar: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Jane Cooper', location: 'Frankfurt, Germany', org: 'MSBM, Frankfurt', device: 'Mac', activity: 'Google Chrome', time: '9 hours 10 minutes', status: 'online', avatar: 'https://i.pravatar.cc/150?u=5' },
  { name: 'Leslie Alexander', location: 'Rome, Italy', org: 'MSBM, Rome', device: 'Windows', activity: 'YouTube', time: '45 minutes', status: 'offline', avatar: 'https://i.pravatar.cc/150?u=6' },
  { name: 'Annette Black', location: 'Calgary, Canada', org: 'MSBM, Calgary', device: 'Linux', activity: 'Opera Mini', time: '45 minutes', status: 'online', avatar: 'https://i.pravatar.cc/150?u=7' },
];

export function OnlineUsersTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Online Users</h2>
          </div>
          <p className="text-xs text-gray-500 mt-1">View your comprehensive online users</p>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs">All Organization <ChevronDown className="w-3 h-3 ml-1" /></Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Location</th>
                <th className="px-6 py-3 font-medium">Organization</th>
                <th className="px-6 py-3 font-medium">Device</th>
                <th className="px-6 py-3 font-medium">Current Activity</th>
                <th className="px-6 py-3 font-medium">Time Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {onlineUsersData.map((user, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-3 flex items-center gap-3">
                    <div className="relative">
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${user.status === 'online' ? 'bg-green-500' : user.status === 'away' ? 'bg-amber-500' : 'bg-gray-400'}`}></span>
                    </div>
                    <span className="font-medium text-gray-900">{user.name}</span>
                  </td>
                  <td className="px-6 py-3 text-gray-600">{user.location}</td>
                  <td className="px-6 py-3 text-gray-600">{user.org}</td>
                  <td className="px-6 py-3 text-gray-600 flex items-center gap-2">
                    {user.device === 'Windows' && <span className="text-blue-500 text-xs border border-blue-200 bg-blue-50 px-1 rounded">W</span>}
                    {user.device === 'Mac' && <span className="text-gray-700 text-xs border border-gray-200 bg-gray-50 px-1 rounded">M</span>}
                    {user.device === 'Linux' && <span className="text-orange-500 text-xs border border-orange-200 bg-orange-50 px-1 rounded">L</span>}
                    {user.device}
                  </td>
                  <td className="px-6 py-3 text-gray-600">{user.activity}</td>
                  <td className="px-6 py-3 text-gray-600">{user.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const appActivityData = [
  { app: 'Google Chrome', users: 34, time: '3 hours 12 minutes', date: '2024-06-26 15:33:49', icon: '🌐' },
  { app: 'YouTube', users: 12, time: '2 hours 8 minutes', date: '2024-05-26 12:45:41', icon: '▶️' },
  { app: 'Microsoft Teams', users: 16, time: '6 hours 45 minutes', date: '2024-05-21 16:28:21', icon: '👥' },
  { app: 'WhatsApp', users: 49, time: '1 hour 30 minutes', date: '2024-06-26 15:33:49', icon: '💬' },
  { app: 'Opera Mini', users: 3, time: '9 hours 10 minutes', date: '2024-05-21 16:28:21', icon: '⭕' },
];

export function ActivityReports() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900">App Activity Report</h2>
            </div>
            <p className="text-xs text-gray-500 mt-1">View your comprehensive organizational app report</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs">All Organization <ChevronDown className="w-3 h-3 ml-1" /></Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">Month <ChevronDown className="w-3 h-3 ml-1" /></Button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-medium">Application</th>
                <th className="px-6 py-3 font-medium">Total Users</th>
                <th className="px-6 py-3 font-medium">Total Number of Hours</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appActivityData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-3 flex items-center gap-3 font-medium text-gray-900">
                    <span className="text-lg">{row.icon}</span> {row.app}
                  </td>
                  <td className="px-6 py-3 text-gray-600">{row.users}</td>
                  <td className="px-6 py-3 text-gray-600">{row.time}</td>
                  <td className="px-6 py-3 text-gray-600">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-900">Web Activity</h2>
            </div>
            <p className="text-xs text-gray-500 mt-1">View your comprehensive organizational web report</p>
          </div>
          <Button variant="outline" size="sm" className="h-8 text-xs">Month <ChevronDown className="w-3 h-3 ml-1" /></Button>
        </div>

        <Card>
          <CardContent className="p-5 space-y-6">
            <WebActivityRow icon="🌐" name="Chrome" value={78} time="5 hours 12 minutes" color="bg-green-500" />
            <WebActivityRow icon="📧" name="Gmail" value={61} time="2 hours 24 minutes" color="bg-green-500" />
            <WebActivityRow icon="🦊" name="Firefox" value={45} time="40 minutes" color="bg-green-500" />
            <WebActivityRow icon="📸" name="Instagram" value={78} time="5 hours 6 minutes" color="bg-green-500" />
            <WebActivityRow icon="𝕏" name="x.com" value={59} time="1 hours 8 minutes" color="bg-green-500" />
            <WebActivityRow icon="📘" name="Facebook" value={61} time="3 hours 1 minute" color="bg-green-500" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const WebActivityRow = ({ icon, name, value, time, color }: { icon: string, name: string, value: number, time: string, color: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md text-lg">{icon}</div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-900">{name}</span>
        <div className="flex gap-3 text-xs text-gray-500">
          <span>{value}%</span>
          <span>{time}</span>
        </div>
      </div>
      <ProgressBar value={value} colorClass={color} />
    </div>
  </div>
);
