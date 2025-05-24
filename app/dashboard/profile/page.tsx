'use client';

import { useAuth } from '@/components/auth-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const initials = `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Profile & Settings</h2>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar_url || ''} />
                <AvatarFallback className="text-lg">{initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
                <p className="text-sm text-muted-foreground capitalize">{user.role}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Add phone number</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Add address</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button>Edit Profile</Button>
              <Button variant="outline">Change Password</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}