'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Settings,
  FileText,
  Bell,
  LifeBuoy,
  Building2,
  BarChart3,
  ClipboardList,
  Calendar,
  MessageSquare,
  BookMarked,
  GraduationCap as Course,
  ScrollText,
  BookOpenCheck,
} from 'lucide-react';
import { useAuth } from '@/components/auth-provider';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useState } from 'react';

const adminNavItems = [
  {
    href: '/dashboard',
    title: 'Dashboard Overview',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    href: '/dashboard/users',
    title: 'User Management',
    icon: <Users className="h-5 w-5" />,
    children: [
      { href: '/dashboard/users/students', title: 'Students' },
      { href: '/dashboard/users/teachers', title: 'Teachers' },
      { href: '/dashboard/users/staff', title: 'Staff' },
    ],
  },
  {
    href: '/dashboard/courses',
    title: 'Course Management',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    href: '/dashboard/departments',
    title: 'Department Settings',
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    href: '/dashboard/reports',
    title: 'Reports & Analytics',
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    href: '/dashboard/system',
    title: 'System Settings',
    icon: <Settings className="h-5 w-5" />,
  },
  {
    href: '/dashboard/announcements',
    title: 'Announcements',
    icon: <Bell className="h-5 w-5" />,
  },
  {
    href: '/dashboard/tickets',
    title: 'Support Tickets',
    icon: <LifeBuoy className="h-5 w-5" />,
  },
];

const teacherNavItems = [
  {
    href: '/dashboard',
    title: 'Dashboard Overview',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    href: '/dashboard/courses',
    title: 'My Courses',
    icon: <Course className="h-5 w-5" />,
  },
  {
    href: '/dashboard/progress',
    title: 'Student Progress',
    icon: <ClipboardList className="h-5 w-5" />,
  },
  {
    href: '/dashboard/assignments',
    title: 'Assignments & Grading',
    icon: <ScrollText className="h-5 w-5" />,
  },
  {
    href: '/dashboard/materials',
    title: 'Course Materials',
    icon: <BookMarked className="h-5 w-5" />,
  },
  {
    href: '/dashboard/calendar',
    title: 'Calendar & Schedule',
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    href: '/dashboard/announcements',
    title: 'Announcements',
    icon: <Bell className="h-5 w-5" />,
  },
  {
    href: '/dashboard/messages',
    title: 'Messages',
    icon: <MessageSquare className="h-5 w-5" />,
  },
];

const studentNavItems = [
  {
    href: '/dashboard',
    title: 'Dashboard Overview',
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    href: '/dashboard/courses',
    title: 'My Courses',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    href: '/dashboard/assignments',
    title: 'Assignments',
    icon: <ScrollText className="h-5 w-5" />,
  },
  {
    href: '/dashboard/grades',
    title: 'Grades & Progress',
    icon: <BookOpenCheck className="h-5 w-5" />,
  },
  {
    href: '/dashboard/materials',
    title: 'Course Materials',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    href: '/dashboard/calendar',
    title: 'Calendar',
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    href: '/dashboard/messages',
    title: 'Messages',
    icon: <MessageSquare className="h-5 w-5" />,
  },
];

interface NavItemProps {
  href: string;
  title: string;
  icon?: React.ReactNode;
  children?: { href: string; title: string }[];
}

function NavItem({ href, title, icon, children }: NavItemProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === href || (children?.some(child => pathname === child.href));

  if (children) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'w-full justify-start gap-2',
            isActive && 'bg-muted hover:bg-muted'
          )}
        >
          {icon}
          {title}
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6 mt-1">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full justify-start',
                pathname === child.href && 'bg-muted hover:bg-muted'
              )}
            >
              {child.title}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'w-full justify-start gap-2',
        isActive && 'bg-muted hover:bg-muted'
      )}
    >
      {icon}
      {title}
    </Link>
  );
}

export function SidebarNav() {
  const { user } = useAuth();
  
  if (!user) return null;

  const navItems = user.role === 'admin' 
    ? adminNavItems 
    : user.role === 'teacher'
    ? teacherNavItems
    : studentNavItems;

  return (
    <nav className="flex flex-col space-y-1">
      {navItems.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
      <div className="mt-auto pt-4">
        <Link
          href="/dashboard/profile"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'w-full justify-start gap-2'
          )}
        >
          <Settings className="h-5 w-5" />
          Profile & Settings
        </Link>
      </div>
    </nav>
  );
}