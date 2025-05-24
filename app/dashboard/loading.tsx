import { School } from 'lucide-react';

export default function DashboardLoading() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <School className="h-10 w-10 animate-pulse text-primary" />
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
}