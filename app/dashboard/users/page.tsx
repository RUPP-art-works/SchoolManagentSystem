'use client';

import { useAuth } from '@/components/auth-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, GraduationCap, UserCog } from 'lucide-react';

export default function UsersPage() {
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
        <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
      </div>
      
      <Tabs defaultValue="students" className="space-y-6">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
        </TabsList>
        
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xl">Students Overview</CardTitle>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Student management features coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="teachers" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xl">Teachers Overview</CardTitle>
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Teacher management features coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="staff" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-xl">Staff Overview</CardTitle>
              <UserCog className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Staff management features coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}