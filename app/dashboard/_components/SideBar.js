"use client"
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming this path is correct
import { cn } from "@/lib/utils"; // Assuming this path is correct for utility functions
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation"; // Import usePathname from Next.js for client components
import { Home, Users, Briefcase } from "lucide-react"; // Import new icons

// Define navigation items
const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Jobs", href: "/dashboard/job", icon: Briefcase },
  { name: "Candidates", href: "/dashboard/candidates", icon: Users },
];


function SideBar() { // Keep as function SideBar to match default export
  // In Next.js, use usePathname to get the current path
  const pathname = usePathname(); // Hook to get current path for active link highlighting

  return (
    <div className="hidden md:flex md:w-64 md:flex-col shadow-lg h-screen bg-card border-r border-border">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        {/* Logo and App Name */}
        <div className="flex items-center flex-shrink-0 px-4 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">RecruitPro</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              // Determine if the current link is active using Next.js pathname
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    isActive
                      ? "bg-primary/10 text-primary border-r-4 border-primary shadow-sm" // Active state styling
                      : "text-muted-foreground hover:bg-muted hover:text-foreground" // Inactive state styling
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 flex-shrink-0 h-5 w-5 transition-colors duration-200",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Progress/Upgrade Section at the bottom (retained from previous version) */}
      <div className="w-full p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
          <p className="text-sm font-semibold text-blue-800">2 out of 5 Pdf Uploaded</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div> {/* Example progress */}
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Upgrade to unlock more uploads and features!
          </p>
          <Button variant="default" size="sm" className="mt-4 w-full rounded-md shadow-sm hover:shadow-md transition-shadow">
            Upgrade Plan
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideBar; // Export as default to match existing imports
