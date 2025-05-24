'use client';

import { useAuth } from '@/components/auth-provider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AreaChart,
  BarChart,
  Card as RechartsCard,
  CardBody,
  CardTitle as RechartsCardTitle,
  Title,
  LineChart,
  BarList,
  DonutChart,
} from '@tremor/react';
import {
  User,
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  UserCheck,
  BookCopy,
  Trophy,
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  
  if (!user) return null;
  
  const isAdmin = user.role === 'admin';
  const isTeacher = user.role === 'teacher';
  const isStudent = user.role === 'student';
  
  const studentAttendanceData = [
    {
      date: 'Jan',
      Present: 90,
    },
    {
      date: 'Feb',
      Present: 95,
    },
    {
      date: 'Mar',
      Present: 93,
    },
    {
      date: 'Apr',
      Present: 88,
    },
    {
      date: 'May',
      Present: 92,
    },
    {
      date: 'Jun',
      Present: 97,
    },
  ];
  
  const gradeDistributionData = [
    {
      subject: 'Mathematics',
      'Term 1': 78,
      'Term 2': 82,
      'Term 3': 86,
    },
    {
      subject: 'Science',
      'Term 1': 85,
      'Term 2': 87,
      'Term 3': 92,
    },
    {
      subject: 'English',
      'Term 1': 88,
      'Term 2': 90,
      'Term 3': 89,
    },
    {
      subject: 'History',
      'Term 1': 82,
      'Term 2': 85,
      'Term 3': 88,
    },
    {
      subject: 'Geography',
      'Term 1': 79,
      'Term 2': 84,
      'Term 3': 87,
    },
  ];
  
  const subjectPerformanceData = [
    {
      name: 'Mathematics',
      value: 86,
    },
    {
      name: 'Science',
      value: 92,
    },
    {
      name: 'English',
      value: 89,
    },
    {
      name: 'History',
      value: 88,
    },
    {
      name: 'Geography',
      value: 87,
    },
  ];

  const classAttendanceData = [
    { name: 'Grade 9A', value: 95 },
    { name: 'Grade 9B', value: 92 },
    { name: 'Grade 10A', value: 88 },
    { name: 'Grade 10B', value: 93 },
    { name: 'Grade 11A', value: 90 },
  ];
  
  const adminCards = [
    {
      title: 'Total Students',
      value: '1,240',
      description: '32 new enrollments this month',
      icon: <User className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Total Teachers',
      value: '68',
      description: '4 new hires this month',
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Active Classes',
      value: '42',
      description: 'Across all grades',
      icon: <BookOpen className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Average Attendance',
      value: '92%',
      description: '↑ 3% from last month',
      icon: <UserCheck className="h-5 w-5 text-primary" />,
    },
  ];
  
  const teacherCards = [
    {
      title: 'My Classes',
      value: '6',
      description: 'Active this term',
      icon: <BookOpen className="h-5 w-5 text-primary" />,
    },
    {
      title: 'My Students',
      value: '182',
      description: 'Across all classes',
      icon: <User className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Teaching Hours',
      value: '24',
      description: 'This week',
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Average Attendance',
      value: '94%',
      description: 'In your classes',
      icon: <UserCheck className="h-5 w-5 text-primary" />,
    },
  ];
  
  const studentCards = [
    {
      title: 'My Subjects',
      value: '8',
      description: 'This semester',
      icon: <BookCopy className="h-5 w-5 text-primary" />,
    },
    {
      title: 'My Attendance',
      value: '96%',
      description: 'This semester',
      icon: <UserCheck className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Next Exam',
      value: 'May 15',
      description: 'Mathematics',
      icon: <Calendar className="h-5 w-5 text-primary" />,
    },
    {
      title: 'GPA',
      value: '3.75',
      description: 'Current academic year',
      icon: <Trophy className="h-5 w-5 text-primary" />,
    },
  ];
  
  const cards = isAdmin ? adminCards : isTeacher ? teacherCards : studentCards;

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          {isAdmin && <TabsTrigger value="reports">Reports</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  <div className="p-1 bg-primary/10 rounded-full">
                    {card.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>
                  {isStudent 
                    ? 'Your academic performance across subjects' 
                    : isTeacher 
                      ? 'Class performance in your subjects'
                      : 'Overall academic performance by subject'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  className="h-72"
                  data={gradeDistributionData}
                  index="subject"
                  categories={['Term 1', 'Term 2', 'Term 3']}
                  colors={['indigo', 'cyan', 'amber']}
                  yAxisWidth={40}
                />
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Attendance</CardTitle>
                <CardDescription>
                  {isStudent 
                    ? 'Your attendance record' 
                    : isTeacher 
                      ? 'Attendance by class'
                      : 'Overall attendance by class'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isStudent ? (
                  <AreaChart
                    className="h-72"
                    data={studentAttendanceData}
                    index="date"
                    categories={['Present']}
                    colors={['teal']}
                    yAxisWidth={30}
                  />
                ) : (
                  <BarList
                    data={classAttendanceData}
                    className="h-72"
                    valueFormatter={(value) => `${value}%`}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          
          {isStudent && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance</CardTitle>
                  <CardDescription>Current semester grades by subject</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <DonutChart
                    className="h-60"
                    data={subjectPerformanceData}
                    category="value"
                    index="name"
                    colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Schedule</CardTitle>
                  <CardDescription>This week's classes and events</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    <div className="flex items-center p-4">
                      <div className="w-10 text-center text-sm font-medium">MON</div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium">Mathematics (08:30 - 10:00)</p>
                        <p className="text-xs text-muted-foreground">Room 101</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4">
                      <div className="w-10 text-center text-sm font-medium">TUE</div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium">Science (10:15 - 11:45)</p>
                        <p className="text-xs text-muted-foreground">Room 205 - Lab</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4">
                      <div className="w-10 text-center text-sm font-medium">WED</div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium">English (13:00 - 14:30)</p>
                        <p className="text-xs text-muted-foreground">Room 103</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4">
                      <div className="w-10 text-center text-sm font-medium">THU</div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium">History (09:00 - 10:30)</p>
                        <p className="text-xs text-muted-foreground">Room 104</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4">
                      <div className="w-10 text-center text-sm font-medium">FRI</div>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium">Geography (11:00 - 12:30)</p>
                        <p className="text-xs text-muted-foreground">Room 102</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trend</CardTitle>
                <CardDescription>Academic performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  className="h-72"
                  data={gradeDistributionData}
                  index="subject"
                  categories={['Term 1', 'Term 2', 'Term 3']}
                  colors={['blue', 'teal', 'amber']}
                  yAxisWidth={40}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Attendance Analysis</CardTitle>
                <CardDescription>Monthly attendance patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  className="h-72"
                  data={studentAttendanceData}
                  index="date"
                  categories={['Present']}
                  colors={['teal']}
                  yAxisWidth={30}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {isAdmin && (
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>School-wide Performance</CardTitle>
                <CardDescription>Average scores by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  {/* Report content would go here */}
                  <p className="text-muted-foreground text-center mt-16">
                    Detailed reports will be available after the end of term evaluation
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}