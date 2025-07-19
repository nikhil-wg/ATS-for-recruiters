"use client"; // This component uses client-side hooks like useRouter

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { MoreHorizontal, MapPin, Calendar, Users } from "lucide-react";

export default function Dashboard() {
  const router = useRouter(); // Initialize Next.js router

  const featuredJob = {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    applicants: 23,
    postedDate: "Jan 15, 2024",
    status: "active",
    description: "We are looking for a Senior Frontend Developer to join our growing engineering team. The ideal candidate will have 5+ years of experience with React, TypeScript, and modern frontend technologies."
  };

  // Helper function to determine badge color based on job status
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border border-green-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "closed":
        return "bg-gray-100 text-gray-800 border border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  // Navigation handlers using Next.js router.push
  const handleViewCandidates = () => {
    router.push(`dashboard/job/${featuredJob.id}/candidates`);
  };

  const handleManageJob = () => {
    router.push(`dashboard/job/${featuredJob.id}/upload`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
     
      {/* Featured Job Listing */}
      <Card className="hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden border border-gray-200">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-xl font-semibold text-gray-900">{featuredJob.title}</CardTitle>
            <p className="text-sm text-gray-600">{featuredJob.department}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={getStatusColor(featuredJob.status)}>
              {featuredJob.status.charAt(0).toUpperCase() + featuredJob.status.slice(1)}
            </Badge>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">{featuredJob.description}</p>

          <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>{featuredJob.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>{featuredJob.postedDate}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-1 text-sm">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="font-semibold text-gray-900">{featuredJob.applicants}</span>
              <span className="text-gray-600">applicants</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={handleViewCandidates} className="rounded-md shadow-sm hover:shadow-md transition-shadow">
                View Candidates
              </Button>
              <Button size="sm" onClick={handleManageJob} className="rounded-md shadow-sm hover:shadow-md transition-shadow">
                Manage Job
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
