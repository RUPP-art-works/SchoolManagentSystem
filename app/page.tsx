import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { School, BookOpenCheck, UsersRound, UserSearch } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <School className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                SchoolSync
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="/login"
                className={buttonVariants({ variant: 'outline' })}
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    School Management, Simplified
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your institution's administrative workflows and enhance educational operations with our comprehensive school management system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/register"
                    className={buttonVariants({ size: 'lg' })}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/demo"
                    className={buttonVariants({ variant: 'outline', size: 'lg' })}
                  >
                    View Demo
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative h-full w-full max-w-[500px] aspect-square rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-muted flex items-center justify-center">
                    <School className="h-32 w-32 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools to manage every aspect of your educational institution.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <UsersRound className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Student Management</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Comprehensive student profiles, academic history tracking, and parent communication tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <UserSearch className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Teacher Management</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Teacher profiles, subject assignments, teaching schedules, and performance tracking.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BookOpenCheck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Academic Management</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Class creation, subject mapping, timetable generation, attendance tracking, and grading.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container flex flex-col sm:flex-row py-6 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <School className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              © 2025 SchoolSync. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}