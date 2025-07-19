"use client"; // Marks this component as a Client Component for Next.js

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For programmatic navigation
// Removed JobCard import as its logic is integrated directly
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Briefcase, MoreHorizontal, MapPin, Calendar, Users } from "lucide-react"; // Added icons used by JobCard

// Mock job data
const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    applicants: 23,
    postedDate: "Jan 15, 2024",
    status: "active"
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    applicants: 18,
    postedDate: "Jan 12, 2024",
    status: "closed"
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "Austin, TX",
    type: "Full-time",
    applicants: 12,
    postedDate: "Jan 10, 2024",
    status: "draft"
  },
];

export default function Jobs() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter jobs based on search term and status
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate counts for each job status
  const statusCounts = {
    all: jobs.length,
    active: jobs.filter(j => j.status === "active").length,
    draft: jobs.filter(j => j.status === "draft").length,
    closed: jobs.filter(j => j.status === "closed").length
  };

  // Handles navigation to the job creation page
  const handleCreateJob = () => {
    router.push("/jobs/new");
  };

  // Helper function for JobCard's status color
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border border-green-200"; // More subtle green
      case "draft":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200"; // More subtle yellow
      case "closed":
        return "bg-gray-100 text-gray-800 border border-gray-200"; // More subtle gray
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
          <p className="text-muted-foreground text-gray-600">Manage your job postings and track applications</p>
        </div>
        <Button
          onClick={handleCreateJob}
          className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-shadow rounded-md"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Job
        </Button>
      </div>

      {/* Search and Filter Section */}
      {/* <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="rounded-md shadow-sm hover:shadow-md transition-shadow">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div> */}

      {/* Status Filter Tabs */}
      <div className="flex flex-wrap gap-2 bg-gray-100 p-1 rounded-lg w-fit">
        {Object.entries(statusCounts).map(([status, count]) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              statusFilter === status
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
          </button>
        ))}
      </div>

      

      {/* Job Listings Grid (JobCard logic integrated here) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden border border-gray-200">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold text-gray-900">{job.title}</CardTitle>
                <p className="text-sm text-muted-foreground text-gray-600">{job.department}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={getStatusColor(job.status)}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </Badge>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>{job.postedDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center space-x-1 text-sm">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="font-semibold text-gray-900">{job.applicants}</span>
                  <span className="text-muted-foreground text-gray-600">applicants</span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md shadow-sm hover:shadow-md transition-shadow"
                    onClick={() => router.push(`/jobs/${job.id}/candidates`)} // Navigate to candidates page
                  >
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-md shadow-sm hover:shadow-md transition-shadow"
                    onClick={() => router.push(`/jobs/${job.id}/manage`)} // Navigate to manage page
                  >
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Jobs Found Message */}
      {filteredJobs.length === 0 && (
        <Card className="rounded-lg shadow-sm border border-gray-200">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-muted-foreground text-center">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-medium mb-2 text-gray-800">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or create a new job listing.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
