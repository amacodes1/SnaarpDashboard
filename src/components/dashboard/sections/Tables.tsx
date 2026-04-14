import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { ProgressBar } from "../../ui/ProgressBar";
import { Table, type TableColumn } from "../../ui/Table";
import { User, ChevronDown, Activity, Globe } from "lucide-react";
import Chrome from "../../../assets/chrome-logo.webp";
import Instagram from "../../../assets/instagram-logo.png";
import YouTube from "../../../assets/youtube-logo.png";
import Teams from "../../../assets/teams-logo.png";
import Operamini from "../../../assets/operamini-logo.png";
import WhatsApp from "../../../assets/whatsapp-logo.png";
import Windows from "../../../assets/windows-logo.jpg";
import Mac from "../../../assets/mac-logo.webp";
import Linux from "../../../assets/linux-logo.png";
import Facebook from "../../../assets/facebook-logo.jpeg";
import X from "../../../assets/x-logo.webp";
import Gmail from "../../../assets/gmail-logo.png";
import Firefox from "../../../assets/firefox-logo.webp";

const onlineUsersData = [
  {
    name: "Annette Black",
    location: "Ottawa, Canada",
    org: "MSBM, Ottawa",
    device: "Windows",
    activity: "Google Chrome",
    time: "3 hours 12 minutes",
    status: "online",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Floyd Miles",
    location: "Lagos, Nigeria",
    org: "MSBM, Lagos",
    device: "Windows",
    activity: "Instagram",
    time: "2 hours 8 minutes",
    status: "online",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Ronald Richards",
    location: "Dubai, UAE",
    org: "MSBM, Dubai",
    device: "Mac",
    activity: "Microsoft Teams",
    time: "6 hours 45 minutes",
    status: "away",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "Guy Hawkins",
    location: "London, UK",
    org: "MSBM, London",
    device: "Windows",
    activity: "Instagram",
    time: "1 hour 30 minutes",
    status: "online",
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "Jane Cooper",
    location: "Frankfurt, Germany",
    org: "MSBM, Frankfurt",
    device: "Mac",
    activity: "Google Chrome",
    time: "9 hours 10 minutes",
    status: "online",
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    name: "Leslie Alexander",
    location: "Rome, Italy",
    org: "MSBM, Rome",
    device: "Windows",
    activity: "YouTube",
    time: "45 minutes",
    status: "offline",
    avatar: "https://i.pravatar.cc/150?u=6",
  },
  {
    name: "Annette Black",
    location: "Calgary, Canada",
    org: "MSBM, Calgary",
    device: "Linux",
    activity: "Opera Mini",
    time: "45 minutes",
    status: "online",
    avatar: "https://i.pravatar.cc/150?u=7",
  },
];

const deviceIconByName: Record<string, string> = {
  Windows,
  Mac,
  Linux,
};

const activityIconByName: Record<string, string> = {
  "Google Chrome": Chrome,
  Instagram,
  YouTube,
  "Microsoft Teams": Teams,
  "Opera Mini": Operamini,
  WhatsApp,
};

type OnlineUserRow = (typeof onlineUsersData)[number];

const onlineUsersColumns: Array<TableColumn<OnlineUserRow>> = [
  {
    key: "name",
    header: "Name",
    cellClassName: "text-gray-900",
    cell: (user) => (
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
          <span
            className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${user.status === "online" ? "bg-green-500" : user.status === "away" ? "bg-amber-500" : "bg-gray-400"}`}
          ></span>
        </div>
        <span className="font-medium text-gray-900">{user.name}</span>
      </div>
    ),
  },
  {
    key: "location",
    header: "Location",
    cell: (user) => user.location,
  },
  {
    key: "org",
    header: "Organization",
    cell: (user) => user.org,
  },
  {
    key: "device",
    header: "Device",
    cell: (user) => (
      <div className="flex items-center gap-2">
        {deviceIconByName[user.device] ? (
          <img
            src={deviceIconByName[user.device]}
            alt={user.device}
            className="w-4 h-4 object-contain"
          />
        ) : null}
        {user.device}
      </div>
    ),
  },
  {
    key: "activity",
    header: "Current Activity",
    cell: (user) => (
      <div className="flex items-center gap-2">
        {activityIconByName[user.activity] ? (
          <img
            src={activityIconByName[user.activity]}
            alt={user.activity}
            className="w-4 h-4 object-contain"
          />
        ) : null}
        <span>{user.activity}</span>
      </div>
    ),
  },
  {
    key: "time",
    header: "Time Usage",
    cell: (user) => user.time,
  },
];

export function OnlineUsersTable() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" />
            <CardTitle className="text-lg">Online Users</CardTitle>
          </div>
          <p className="text-xs text-gray-500 font-normal mt-1">
            View your comprehensive online users
          </p>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs">
          All Organization <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </CardHeader>

      <CardContent className="p-0">
        <Table
          data={onlineUsersData}
          columns={onlineUsersColumns}
          getRowKey={(row, index) => `${row.name}-${row.location}-${index}`}
        />
      </CardContent>
    </Card>
  );
}

const appActivityData = [
  {
    app: "Google Chrome",
    users: 34,
    time: "3 hours 12 minutes",
    date: "2024-06-26 15:33:49",
    icon: Chrome,
  },
  {
    app: "YouTube",
    users: 12,
    time: "2 hours 8 minutes",
    date: "2024-05-26 12:45:41",
    icon: YouTube,
  },
  {
    app: "Microsoft Teams",
    users: 16,
    time: "6 hours 45 minutes",
    date: "2024-05-21 16:28:21",
    icon: Teams,
  },
  {
    app: "WhatsApp",
    users: 49,
    time: "1 hour 30 minutes",
    date: "2024-06-26 15:33:49",
    icon: WhatsApp,
  },
  {
    app: "Opera Mini",
    users: 3,
    time: "9 hours 10 minutes",
    date: "2024-05-21 16:28:21",
    icon: Operamini,
  },
  {
    app: "Instagram",
    users: 22,
    time: "45 minutes",
    date: "2024-05-21 16:28:21",
    icon: Instagram,
  },
];

type AppActivityRow = (typeof appActivityData)[number];

const appActivityColumns: Array<TableColumn<AppActivityRow>> = [
  {
    key: "application",
    header: "Application",
    cellClassName: "text-gray-900 font-medium",
    cell: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.icon} alt={row.app} className="w-5 h-5" />
        <span>{row.app}</span>
      </div>
    ),
  },
  {
    key: "users",
    header: "Total Users",
    cell: (row) => row.users,
  },
  {
    key: "hours",
    header: "Total Number of Hours",
    cell: (row) => row.time,
  },
  {
    key: "date",
    header: "Date",
    cell: (row) => row.date,
  },
];

export function ActivityReports() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
      <Card className="lg:col-span-3 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-gray-500" />
              <CardTitle className="text-lg">App Activity Report</CardTitle>
            </div>
            <p className="text-xs text-gray-500 font-normal mt-1">
              View your comprehensive organizational app report
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs">
              All Organization <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs">
              Month <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <Table
            data={appActivityData}
            columns={appActivityColumns}
            getRowKey={(row, index) => `${row.app}-${row.date}-${index}`}
          />
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-4 border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-gray-500" />
              <CardTitle className="text-lg">Web Activity</CardTitle>
            </div>
            <p className="text-xs text-gray-500 font-normal mt-1">
              View your comprehensive organizational web report
            </p>
          </div>
          <Button variant="outline" size="sm" className="h-8 text-xs">
            Month <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </CardHeader>

        <CardContent className="p-5 pt-5 space-y-6">
          <WebActivityRow
            icon={Chrome}
            name="Chrome"
            value={78}
            time="5 hours 12 minutes"
            color="bg-green-500"
          />
          <WebActivityRow
            icon={Gmail}
            name="Gmail"
            value={61}
            time="2 hours 24 minutes"
            color="bg-green-500"
          />
          <WebActivityRow
            icon={Firefox}
            name="Firefox"
            value={45}
            time="40 minutes"
            color="bg-green-500"
          />
          <WebActivityRow
            icon={Instagram}
            name="Instagram"
            value={78}
            time="5 hours 6 minutes"
            color="bg-green-500"
          />
          <WebActivityRow
            icon={X}
            name="x.com"
            value={59}
            time="1 hours 8 minutes"
            color="bg-green-500"
          />
          <WebActivityRow
            icon={Facebook}
            name="Facebook"
            value={61}
            time="3 hours 1 minute"
            color="bg-green-500"
          />
        </CardContent>
      </Card>
    </div>
  );
}

const WebActivityRow = ({
  icon,
  name,
  value,
  time,
  color,
}: {
  icon: string;
  name: string;
  value: number;
  time: string;
  color: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-0 min-w-0">
      <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md flex-shrink-0">
        <img src={icon} alt={name} className="w-5 h-5 object-contain" />
      </div>
      <span className="text-sm font-medium text-gray-900 truncate">{name}</span>
    </div>

    <ProgressBar
      value={value}
      colorClass={color}
      className="flex-1 min-w-[120px] h-2"
    />

    <div className="flex items-center justify-end gap-3 text-xs text-gray-500 flex-shrink-0 w-[140px]">
      <span>{value}%</span>
      <span className="whitespace-nowrap">{time}</span>
    </div>
  </div>
);
