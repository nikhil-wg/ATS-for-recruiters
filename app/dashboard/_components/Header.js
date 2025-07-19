import React from "react"; // React import is good practice even if not directly used in JSX
import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function Header() {
  return (
    <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search jobs, candidates..."
            className="pl-10 bg-background rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        <Button variant="outline" size="sm" className="rounded-md shadow-sm hover:shadow-md transition-shadow">
          <Plus className="w-4 h-4 mr-2" />
          Create Job
        </Button>

        <Button variant="ghost" size="sm" className="relative rounded-full p-2 hover:bg-gray-200 transition-colors">
          <Bell className="w-4 h-4" />
          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </Button>
      </div>
    </header>
  );
}

export default Header; // Export as default
