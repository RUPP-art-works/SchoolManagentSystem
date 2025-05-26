'use client';

import { useAuth } from '@/components/auth-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function SystemPage() {
  const { user } = useAuth();

  if (user?.role !== 'admin') {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">You don't have access to this page.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">System Settings</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xl">System Overview</CardTitle>
            <Settings className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">System configuration features coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}